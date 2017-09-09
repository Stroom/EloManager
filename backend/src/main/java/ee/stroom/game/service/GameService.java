package ee.stroom.game.service;

import ee.stroom.game.model.Game;
import ee.stroom.game.model.GameRepository;
import ee.stroom.game.web.dto.GameDTO;
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
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;

@Service
public class GameService {
	
	private ReentrantLock matchLock;
	
	private final GameRepository gameRepository;
	private final MatchRepository matchRepository;
	private final RankingRepository rankingRepository;
	private final PlayerRepository playerRepository;
	private final UserRepository userRepository;
	
	@Autowired
	GameService(GameRepository gameRepository, MatchRepository matchRepository, RankingRepository rankingRepository,
				PlayerRepository playerRepository, UserRepository userRepository) {
		this.gameRepository = gameRepository;
		this.matchRepository = matchRepository;
		this.rankingRepository = rankingRepository;
		this.playerRepository = playerRepository;
		this.userRepository = userRepository;
		this.matchLock = new ReentrantLock();
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
	
	public GameDTO addMatch(MatchDTO matchDTO) {
		matchLock.lock();
		Game game = null;
		try {
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
				Ranking newRanking = new Ranking();
				newRanking.setGame(game);
				newRanking.setUser(player.getUser());
				newRanking.setValue(game.getInitialRanking());
				playerRanking = rankingRepository.save(newRanking);
			}
			for(int j = i+1; j < players.size(); j++) {
				Player opponent = players.get(j);
				if(player.getUser().getUserId() != opponent.getUser().getUserId()) {//TODO maybe just compare objects.
					Ranking opponentRanking = rankingRepository.getUserGameRanking(opponent.getUser().getName(), game.getName());
					
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
	
}
