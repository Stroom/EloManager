package ee.stroom.security.service;

import ee.stroom.security.model.SiteUser;
import ee.stroom.security.model.dto.SiteUserDTO;
import ee.stroom.security.model.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SiteUserService {
	
	@Autowired
	SiteUserRepository userRepository;
	
	public List<SiteUserDTO> findAllUsers() {
		List<SiteUserDTO> response = new ArrayList<SiteUserDTO>();
		List<SiteUser> list = userRepository.findAll();
		if(list != null && !list.isEmpty()) {
			list.stream().forEach(user -> response.add(user.toDTO()));
		}
		return response;
	}
	
	public SiteUserDTO findUserById(Long id) {
		SiteUser user = userRepository.findById(id);
		if(user != null) {
			return user.toDTO();
		}
		return null;
	}
	
}
