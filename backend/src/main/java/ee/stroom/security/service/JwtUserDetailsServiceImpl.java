package ee.stroom.security.service;

import ee.stroom.security.JwtUserFactory;
import ee.stroom.security.model.SiteUser;
import ee.stroom.security.model.SiteUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private SiteUserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		SiteUser user = userRepository.findByUsername(username);
		
		if(user == null) {
			throw new UsernameNotFoundException("Username not found: " + username);
		}
		return JwtUserFactory.create(user);
	}
	
}
