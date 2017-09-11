package ee.stroom.security;

import ee.stroom.security.model.Authority;
import ee.stroom.security.model.SiteUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.stream.Collectors;

public final class JwtUserFactory {
	
	private JwtUserFactory() {}
	
	public static JwtUser create(SiteUser user) {
		return new JwtUser(
				user.getId().toString(),
				user.getUsername(),
				user.getPassword(),
				mapToGrantedAuthorities(user.getAuthorities()),
				user.getEnabled(),
				user.getLastPasswordResetDate()
		);
	}
	
	private static List<GrantedAuthority> mapToGrantedAuthorities(List<Authority> authorities) {
		return authorities.stream().map(a -> new SimpleGrantedAuthority(a.getName())).collect(Collectors.toList());
	}
}
