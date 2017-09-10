package ee.stroom.game.service;

import ee.stroom.game.model.Game;
import ee.stroom.game.model.GameRepository;
import ee.stroom.game.service.exception.TokenExpiredException;
import ee.stroom.game.web.dto.GameDTO;
import ee.stroom.game.web.dto.TokenDTO;
import ee.stroom.match.model.Match;
import ee.stroom.match.model.MatchRepository;
import ee.stroom.match.model.Player;
import ee.stroom.match.model.PlayerRepository;
import ee.stroom.match.web.dto.MatchDTO;
import ee.stroom.match.web.dto.PlayerDTO;
import ee.stroom.ranking.model.Ranking;
import ee.stroom.ranking.model.RankingRepository;
import ee.stroom.ranking.web.dto.RankingDTO;
import ee.stroom.user.model.User;
import ee.stroom.user.model.UserRepository;
import org.javatuples.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;

@Service
public class GameService {
	
	private static final ReentrantLock matchLock = new ReentrantLock(true);
	
	private final GameRepository gameRepository;
	private final MatchRepository matchRepository;
	private final RankingRepository rankingRepository;
	private final PlayerRepository playerRepository;
	private final UserRepository userRepository;
	
	@Resource(name = "ehCacheManager")
	private CacheManager cacheManager;
	
	@Autowired
	GameService(GameRepository gameRepository, MatchRepository matchRepository, RankingRepository rankingRepository,
				PlayerRepository playerRepository, UserRepository userRepository) {
		this.gameRepository = gameRepository;
		this.matchRepository = matchRepository;
		this.rankingRepository = rankingRepository;
		this.playerRepository = playerRepository;
		this.userRepository = userRepository;
	}
	
	public List<GameDTO> getAllGames() {
		return gameRepository.findAll().stream().map(game -> new GameDTO(game)).collect(Collectors.toList());
	}
	
	public List<MatchDTO> getGameMatches(String gameName) {
		return gameRepository.getGameMatches(gameName).stream().map(match -> new MatchDTO(match)).collect(Collectors.toList());
	}
	
	public List<RankingDTO> getGameRankings(String gameName) {
		return gameRepository.getGameRankings(gameName).stream().map(ranking -> new RankingDTO(ranking)).collect(Collectors.toList());
	}
	
	public TokenDTO getMatchToken() {
		String token = UUID.randomUUID().toString();
		setToken(token);
		return new TokenDTO(token);
	}
	
	public void setToken(String token) {
		((EhCacheCacheManager) cacheManager).getCache("tokencache").put(token, token);
	}
	
	public void removeToken(String token) {
		((EhCacheCacheManager) cacheManager).getCache("tokencache").evict(token);
	}
	
	public GameDTO addMatch(MatchDTO matchDTO, String token) {
		matchLock.lock();
		Game game = null;
		try {
			Cache.ValueWrapper wrapper = ((EhCacheCacheManager) cacheManager).getCache("tokencache").get(token);
			if (wrapper != null) {
				removeToken(token);
			}
			else {
				throw new TokenExpiredException("Token was not found");
			}
			//TODO validation
			game = gameRepository.getGameByName(matchDTO.getGameName());
			Match match = new Match(game);
			List<Player> players = new ArrayList<Player>();
			
			setMatchData(match, matchDTO, players);
			
			playerRepository.save(players);//TODO order of saves?
			matchRepository.save(match);
			
			
			updateRankings(game, players);
		}
		finally {
			matchLock.unlock();
		}
		if(game == null) {
			throw new NullPointerException("Match not added");
		}
		return new GameDTO(game);
	}
	
	private void setMatchData(Match match, MatchDTO matchDTO, List<Player> players) {
		for(PlayerDTO playerDTO : matchDTO.getPlayers()) {
			User user = userRepository.findByName(playerDTO.getUsername());
			if(user == null) {
				user = userRepository.save(new User(playerDTO.getUsername()));
			}
			players.add(new Player(user, playerDTO.getScore()));
		}
		match.setPlayers(players);
	}
	
	private void updateRankings(Game game, List<Player> players) {
		Map<Ranking, BigDecimal> rankingDeltas = new HashMap<Ranking, BigDecimal>();
		//For each player calculate delta vs each other player and add it to current total.
		for(int i = 0; i < players.size()-1; i++) {
			Player player = players.get(i);
			Ranking playerRanking = rankingRepository.getUserGameRanking(player.getUser().getName(), game.getName());
			if(playerRanking == null) {
				playerRanking = setNewRanking(game, player.getUser());
			}
			for(int j = i+1; j < players.size(); j++) {
				Player opponent = players.get(j);
				if(player.getUser().getUserId() != opponent.getUser().getUserId()) {//TODO maybe just compare objects.
					Ranking opponentRanking = rankingRepository.getUserGameRanking(opponent.getUser().getName(), game.getName());
					if(opponentRanking == null) {
						opponentRanking = setNewRanking(game, opponent.getUser());
					}
					Pair<BigDecimal, BigDecimal> deltas = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
					
					rankingDeltas.put(playerRanking, rankingDeltas.getOrDefault(player, BigDecimal.ZERO).add(deltas.getValue0()));
					rankingDeltas.put(opponentRanking, rankingDeltas.getOrDefault(player, BigDecimal.ZERO).add(deltas.getValue1()));
				}
			}
		}
		//Based on deltas list add it to each players ranking and update the current rankings of all players
		for(Ranking ranking : rankingDeltas.keySet()) {
			ranking.setValue(ranking.getValue().add(rankingDeltas.get(ranking)));
			rankingRepository.save(ranking);
		}
	}
	
	private Ranking setNewRanking(Game game, User user) {
		Ranking newRanking = new Ranking();
		newRanking.setGame(game);
		newRanking.setUser(user);
		newRanking.setValue(game.getInitialRanking());
		return rankingRepository.save(newRanking);
	}
}
