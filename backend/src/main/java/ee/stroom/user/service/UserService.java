package ee.stroom.user.service;

import ee.stroom.match.web.dto.MatchDTO;
import ee.stroom.user.model.UserRepository;
import ee.stroom.user.web.dto.UserDTO;
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
	
	public List<UserDTO> getAllUsers() {
		return userRepository.findAll().stream().map(user -> new UserDTO(user)).sorted(new Comparator<UserDTO>() {
			@Override
			public int compare(UserDTO o1, UserDTO o2) {
				return o1.getUserName().compareTo(o2.getUserName());
			}
		}).collect(Collectors.toList());
	}
	
	public UserDTO getUserByName(String username) {
		return new UserDTO(userRepository.findByName(username));
	}
	
	public List<MatchDTO> getUserMatches(String username) {
		return userRepository.getUserMatches(username);
	}
	
}
