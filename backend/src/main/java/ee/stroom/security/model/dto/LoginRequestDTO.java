package ee.stroom.security.model.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class LoginRequestDTO implements Serializable {
	
	private static final long serialVersionUID = -8445943548965154778L;
	
	private String username;
	private String password;
	
	public LoginRequestDTO() {
		super();
	}
	
	public LoginRequestDTO(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}
	
}
