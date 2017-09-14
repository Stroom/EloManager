package ee.stroom.game.controller;

import ee.stroom.game.model.dto.GameDTO;
import ee.stroom.game.model.dto.TokenDTO;
import ee.stroom.game.service.GameService;
import ee.stroom.game.service.exception.TokenExpiredException;
import ee.stroom.match.model.dto.MatchDTO;
import ee.stroom.ranking.model.dto.RankingDTO;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
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
	@ResponseStatus(HttpStatus.OK)
	public List<GameDTO> getAllGames() {
		return gameService.getAllGames();
	}
	
	@GetMapping("/{gameName}/matches")
	@ResponseStatus(HttpStatus.OK)
	public List<MatchDTO> getGameMatches(@PathVariable("gameName") String gameName) {
		return gameService.getGameMatches(gameName);
	}
	
	@GetMapping("/{gameName}/matches/{matchId}")
	@ResponseStatus(HttpStatus.OK)
	public MatchDTO getMatch(@PathVariable("gameName") String gameName,
							 @PathVariable("matchId") Long matchId) {
		return gameService.getMatch(gameName, matchId);
	}
	
	@PostMapping("/{gameName}/matches/{matchId}")
	@ResponseStatus(HttpStatus.OK)
	public MatchDTO updateMatch(@PathVariable("gameName") String gameName,
								@PathVariable("matchId") Long matchId,
								@RequestBody MatchDTO match,
								@RequestParam(value = "token", required = true) String token) {
		return gameService.updateMatch(gameName, matchId, match, token);
	}
	
	@DeleteMapping("/{gameName}/matches/{matchId}")
	@ResponseStatus(HttpStatus.OK)
	public MatchDTO deleteGameMatch(@PathVariable("gameName") String gameName,
									@PathVariable("matchId") Long matchId,
									@RequestParam(value = "token", required = true) String token) {
		return gameService.deleteGameMatch(gameName, matchId, token);
	}
	
	@GetMapping("/{gameName}/rankings")
	@ResponseStatus(HttpStatus.OK)
	public List<RankingDTO> getGameRankings(@PathVariable("gameName") String gameName) {
		return gameService.getGameRankings(gameName);
	}
	
	@GetMapping("/{gameName}/token")
	@ResponseStatus(HttpStatus.OK)
	public TokenDTO getActionToken(@PathVariable("gameName") String gameName) {
		return gameService.getActionToken();
	}
	
	@PostMapping("/{gameName}")
	@ResponseStatus(HttpStatus.OK)
	@PreAuthorize("hasRole('ADMIN')")
	public GameDTO addMatch(@PathVariable("gameName") String gameName,
							@RequestParam(value = "token", required = true) String token,
							@RequestBody MatchDTO match) {
		return gameService.addMatch(match, token);
	}
	
	@PostMapping("/{gameName}/recalculate")
	@ResponseStatus(HttpStatus.OK)
	@PreAuthorize("hasRole('ADMIN')")
	public GameDTO recalculateRankings(@PathVariable("gameName") String gameName,
									   @RequestParam(value = "token", required = true) String token) {
		return gameService.recalculateRankings(gameName, token);
	}
	
	
	
	
	@ExceptionHandler({ TokenExpiredException.class })
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public String handleTokenException(Exception e) {
		return "Token missing or expired";
	}
	
	@ExceptionHandler({ NullPointerException.class })
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public String handleException(Exception e) {
		e.printStackTrace();
		return "Unexpected error";
	}
	
}
