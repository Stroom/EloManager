package ee.stroom.security.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "of")
public class SiteUserDTO {
	
	private Long _id;
	
	private String username;
	
	private List<String> authorities;
	
}
