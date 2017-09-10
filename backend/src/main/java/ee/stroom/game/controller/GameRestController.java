package ee.stroom.game.controller;

import ee.stroom.game.service.GameService;
import ee.stroom.game.web.dto.GameDTO;
import ee.stroom.match.web.dto.MatchDTO;
import ee.stroom.ranking.web.dto.RankingDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/api/games")
@CrossOrigin
public class GameRestController<Game, ID extends Serializable> {
	
	private final GameService gameService;
	
	public GameRestController(GameService gameService) {
		this.gameService = gameService;
	}
	
	@GetMapping
	public List<GameDTO> getAllGames() {
		return gameService.getAllGames();
	}
	
	@GetMapping("/{gameName}/matches")
	public List<MatchDTO> getGameMatches(@PathVariable("gameName") String gameName) {
		return gameService.getGameMatches(gameName);
	}
	
	@GetMapping("/{gameName}/rankings")
	public List<RankingDTO> getGameRankings(@PathVariable("gameName") String gameName) {
		return gameService.getGameRankings(gameName);
	}
	
	@PostMapping("/{gameName}")
	public GameDTO addMatch(@PathVariable("gameName") String gameName, @RequestBody MatchDTO match) {
		//TODO some prevention against double-entry?
		return gameService.addMatch(match);
	}
	
	
	
	
	@ExceptionHandler({ NullPointerException.class })
	public String handleException(Exception e) {
		e.printStackTrace();
		return "Unexpected error";
	}
	
}
