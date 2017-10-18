package ee.stroom.security.model;

import ee.stroom.security.model.dto.SiteUserDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class SiteUser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "bigserial")
	private Long id;
	
	@Column(nullable = false, unique = true)
	private String username;
	@Column(nullable = false)
	private String password;
	
	@ManyToMany(fetch =  FetchType.EAGER)
	private List<Authority> authorities;
	
	@NotNull
	private Boolean enabled;
	
	@Temporal(TemporalType.TIMESTAMP)
	@NotNull
	private Date lastPasswordResetDate;//TODO LocalDate
	
	public SiteUserDTO toDTO() {
		List<String> auths = new ArrayList<String>();
		if(this.authorities != null && !this.authorities.isEmpty()) {
			this.authorities.forEach(a -> auths.add(a.getName()));
		}
		return SiteUserDTO.of(
				this.id,
				this.username,
				auths
		);
	}
}
