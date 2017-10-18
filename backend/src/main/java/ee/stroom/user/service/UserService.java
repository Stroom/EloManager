package ee.stroom.user.service;

import ee.stroom.match.model.dto.MatchDTO;
import ee.stroom.user.model.UserRepository;
import ee.stroom.user.model.dto.GameUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	@Autowired
	UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	public List<GameUserDTO> getAllUsers() {
		return userRepository.findAll().stream().map(user -> new GameUserDTO(user)).sorted(new Comparator<GameUserDTO>() {
			@Override
			public int compare(GameUserDTO o1, GameUserDTO o2) {
				return o1.getUsername().compareTo(o2.getUsername());
			}
		}).collect(Collectors.toList());
	}
	
	public GameUserDTO getUserByName(String username) {
		return new GameUserDTO(userRepository.findByName(username));
	}
	
	public List<MatchDTO> getUserMatches(String username) {
		return userRepository.getUserMatches(username);
	}
	
}
