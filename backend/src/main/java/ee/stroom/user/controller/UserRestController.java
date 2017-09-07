package ee.stroom.user.controller;

import ee.stroom.match.web.dto.MatchDTO;
import ee.stroom.user.web.dto.UserDTO;
import ee.stroom.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users/")
public class UserRestController {
	
	private final UserService userService;
	
	@Autowired
	UserRestController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping
	public @ResponseBody List<UserDTO> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@GetMapping("/{userName}")
	public @ResponseBody UserDTO getUserByName(@PathVariable String username) {
		return userService.getUserByName(username);
	}
	
	@GetMapping("/{userName}/matches")
	public @ResponseBody List<MatchDTO> getUserMatches(@PathVariable String username) {
		return userService.getUserMatches(username);
	}
	
}
