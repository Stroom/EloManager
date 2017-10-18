package ee.stroom.game.service;

import ee.stroom.game.model.Game;
import ee.stroom.game.model.GameRepository;
import ee.stroom.game.model.dto.GameDTO;
import ee.stroom.game.model.dto.TokenDTO;
import ee.stroom.game.service.exception.TokenExpiredException;
import ee.stroom.match.model.Match;
import ee.stroom.match.model.MatchRepository;
import ee.stroom.match.model.Player;
import ee.stroom.match.model.PlayerRepository;
import ee.stroom.match.model.dto.MatchDTO;
import ee.stroom.match.model.dto.PlayerDTO;
import ee.stroom.ranking.model.Ranking;
import ee.stroom.ranking.model.RankingRepository;
import ee.stroom.ranking.model.dto.RankingDTO;
import ee.stroom.user.model.GameUser;
import ee.stroom.user.model.UserRepository;
import org.javatuples.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.locks.ReentrantLock;
import java.util.logging.Logger;
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
		return gameRepository.findAll().stream().map(GameDTO::new).collect(Collectors.toList());
	}
	
	public List<MatchDTO> getGameMatches(String gameName) {
		return gameRepository.getGameMatches(gameName).stream().map(MatchDTO::new).collect(Collectors.toList());
	}
	
	public MatchDTO getMatch(String gameName, Long matchId) {
		return new MatchDTO(gameRepository.getGameMatch(gameName, matchId));
	}
	
	public MatchDTO updateMatch(String gameName, Long matchId, MatchDTO matchDTO, String token) {
		matchLock.lock();
		Match match;
		try {
			tryToRemoveToken(token);
			
			match = gameRepository.getGameMatch(gameName, matchId);
			if(match == null) {
				throw new NullPointerException("Match not found.");
			}
			
			if(matchDTO.getDateTime() != null) {
				//match.setDateTime(matchDTO.getDateTime());
			}
			
			List<Player> oldPlayers = match.getPlayers();
			List<Player> newPlayers = new ArrayList<>();
			if(matchDTO.getPlayers() != null && matchDTO.getPlayers().size() > 1) {
				setMatchData(match, matchDTO, newPlayers);
			}
			
			playerRepository.save(newPlayers);
			matchRepository.save(match);
			oldPlayers.forEach(playerRepository::delete);
		}
		finally {
			matchLock.unlock();
		}
		return new MatchDTO(match);
	}
	
	public MatchDTO deleteGameMatch(String gameName, Long matchId, String token) {
		matchLock.lock();
		Match match;
		try {
			tryToRemoveToken(token);
			
			match = matchRepository.findOne(matchId);
			if(match == null) {
				throw new NullPointerException("Match not found.");
			}
			
			matchRepository.delete(match);
			match.getPlayers().forEach(playerRepository::delete);
		}
		finally {
			matchLock.unlock();
		}
		return new MatchDTO(match);
	}
	
	public List<RankingDTO> getGameRankings(String gameName) {
		return gameRepository.getGameRankings(gameName).stream().map(RankingDTO::new).collect(Collectors.toList());
	}
	
	public TokenDTO getActionToken() {
		String token = UUID.randomUUID().toString();
		addToken(token);
		return new TokenDTO(token);
	}
	
	private void addToken(String token) {
		cacheManager.getCache("tokencache").put(token, token);
	}
	
	private void removeToken(String token) {
		cacheManager.getCache("tokencache").evict(token);
	}
	
	public GameDTO addMatch(MatchDTO matchDTO, String token) {
		matchLock.lock();
		Game game;
		try {
			tryToRemoveToken(token);
			
			//TODO validation
			game = gameRepository.getGameByName(matchDTO.getGameName());
			if(game == null) {
				throw new NullPointerException("Game not found. Match not added.");
			}
			
			Match match = new Match(game);
			List<Player> players = new ArrayList<>();
			setMatchData(match, matchDTO, players);
			playerRepository.save(players);
			matchRepository.save(match);
			
			Map<Player, Ranking> playerRankings = new HashMap<>();
			setPlayerRankings(playerRankings, game, players);
			
			createUpdatedRankings(game, playerRankings);
			
			//Some parsing and saving into database is done separately so the same method could be used again
			//for recalculating all game's matches which needs more precision.
			for(Ranking ranking : playerRankings.values()) {
				ranking.setValue(ranking.getValue().setScale(5, BigDecimal.ROUND_UP));
				rankingRepository.save(ranking);
			}
		}
		finally {
			matchLock.unlock();
		}
		return new GameDTO(game);
	}
	
	private void tryToRemoveToken(String token) {
		Cache.ValueWrapper wrapper = cacheManager.getCache("tokencache").get(token);
		if (wrapper != null) {
			removeToken(token);
		}
		else {
			throw new TokenExpiredException("Token was not found");
		}
	}
	
	private void setMatchData(Match match, MatchDTO matchDTO, List<Player> players) {
		Logger log = Logger.getLogger(GameService.class.getName());
		log.warning(match + " " + matchDTO + " " + players);
		for(PlayerDTO playerDTO : matchDTO.getPlayers()) {
			GameUser gameUser = userRepository.findByName(playerDTO.getUsername());
			if(gameUser == null) {
				gameUser = userRepository.save(new GameUser(playerDTO.getUsername()));
				log.warning("null" + gameUser.toString());
			}
			else {
				log.warning("okok" + gameUser.toString());
			}
			players.add(new Player(gameUser, playerDTO.getScore()));
		}
		//TODO check that there are no duplicate players.
		match.setPlayers(players);
	}
	
	private void setPlayerRankings(Map<Player, Ranking> playerRankings, Game game, List<Player> players) {
		for(Player player : players) {
			Ranking ranking = rankingRepository.getUserGameRanking(player.getGameUser().getName(), game.getName());
			if(ranking == null) {
				ranking = setNewRanking(game, player.getGameUser());
			}
			playerRankings.put(player, ranking);
		}
	}
	
	private void createUpdatedRankings(Game game, Map<Player, Ranking> playerRankings) {
		Map<Ranking, BigDecimal> rankingDeltas = new HashMap<>();
		//For each player calculate delta vs each other player and add it to current total.
		List<Player> players = new ArrayList<>(playerRankings.keySet());
		for(int i = 0; i < players.size()-1; i++) {
			Player player = players.get(i);
			Ranking playerRanking = playerRankings.get(player);
			for(int j = i+1; j < players.size(); j++) {
				Player opponent = players.get(j);
				if(!player.getGameUser().getUserId().equals(opponent.getGameUser().getUserId())) {//TODO maybe just compare objects.
					Ranking opponentRanking = playerRankings.get(opponent);
					
					Pair<BigDecimal, BigDecimal> deltas = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
					
					rankingDeltas.put(playerRanking, rankingDeltas.getOrDefault(playerRanking, BigDecimal.ZERO).add(deltas.getValue0()));
					rankingDeltas.put(opponentRanking, rankingDeltas.getOrDefault(opponentRanking, BigDecimal.ZERO).add(deltas.getValue1()));
				}
			}
		}
		//Based on deltas list add it to each players ranking and update the current rankings of all players
		for(Ranking ranking : rankingDeltas.keySet()) {
			ranking.setValue(ranking.getValue().add(rankingDeltas.get(ranking)));
			Player player = getPlayerFromUser(players, ranking.getGameUser());
			playerRankings.put(player, ranking);
		}
	}
	
	private Ranking setNewRanking(Game game, GameUser gameUser) {
		Ranking newRanking = new Ranking();
		newRanking.setGame(game);
		newRanking.setGameUser(gameUser);
		newRanking.setValue(game.getInitialRanking());
		return rankingRepository.save(newRanking);
	}
	
	public GameDTO recalculateRankings(String gameName, String token) {
		matchLock.lock();
		Game game;
		try {
			tryToRemoveToken(token);
			
			game = gameRepository.getGameByName(gameName);
			if(game == null) {
				throw new NullPointerException("Game not found");
			}
			
			//Get all users and their rankings who have participated so far in this game.
			//For each user, set their ranking to game default.
			List<Ranking> rankings = rankingRepository.getAllGameRankings(gameName);
			Map<GameUser, Ranking> userRankings = new HashMap<>();
			for(Ranking ranking : rankings) {
				ranking.setValue(game.getInitialRanking());
				userRankings.put(ranking.getGameUser(), ranking);
			}
			
			//Get all matches for this game in timeline order
			List<Match> matches = matchRepository.getAllGameMatches(gameName);
			//For each match, calculate the ranking deltas and set them for the players.
			for(Match match : matches) {
				//Initial info
				Map<Player, Ranking> matchPlayerRankings = new HashMap<>();
				for(Player player : match.getPlayers()) {
					matchPlayerRankings.put(player, userRankings.get(player.getGameUser()));
				}
				//Get new rankings
				createUpdatedRankings(game, matchPlayerRankings);
				
				//Save new rankings under playerRankings
				for(Player player : matchPlayerRankings.keySet()) {
					Ranking ranking = matchPlayerRankings.get(player);
					ranking.setValue(ranking.getValue().setScale(5, BigDecimal.ROUND_UP));
					userRankings.put(player.getGameUser(), ranking);
				}
			}
			
			//For each (updated) player object, save its ranking to the database.
			for(Ranking ranking : userRankings.values()) {
				ranking.setValue(ranking.getValue().setScale(5, BigDecimal.ROUND_UP));
				rankingRepository.save(ranking);
			}
		}
		finally {
			matchLock.unlock();
		}
		return new GameDTO(game);
	}
	
	private Player getPlayerFromUser(List<Player> players, GameUser gameUser) {
		for(Player player : players) {
			if(player.getGameUser().getUserId().equals(gameUser.getUserId())) {
				return player;
			}
		}
		throw new NullPointerException("User not found");
	}
	
}
