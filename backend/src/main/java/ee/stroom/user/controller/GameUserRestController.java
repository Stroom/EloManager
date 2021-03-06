package ee.stroom.user.controller;

import ee.stroom.match.model.dto.MatchDTO;
import ee.stroom.user.model.dto.GameUserDTO;
import ee.stroom.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class GameUserRestController {
	
	private final UserService userService;
	
	@Autowired
	GameUserRestController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping
	public List<GameUserDTO> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@GetMapping("/{username}")
	public GameUserDTO getUserByName(@PathVariable("username") String username) {
		return userService.getUserByName(username);
	}
	
	@GetMapping("/{username}/matches")
	public List<MatchDTO> getUserMatches(@PathVariable("username") String username) {
		return userService.getUserMatches(username);
	}
	
}
