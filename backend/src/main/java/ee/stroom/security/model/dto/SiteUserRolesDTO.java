package ee.stroom.security.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class SiteUserRolesDTO {
	
	private final List<String> authorities;
	
	public SiteUserRolesDTO(List<String> authorities) {
		this.authorities = authorities;
	}
	
}
