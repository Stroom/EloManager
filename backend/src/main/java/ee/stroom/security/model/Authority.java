package ee.stroom.security.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Authority {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "serial")
	private Long id;
	
	@Column(nullable = false, unique = true)
	private String name;
	
	@Override
	public boolean equals(Object obj) {
		if(this == obj) {
			return true;
		}
		if(obj == null || getClass() != obj.getClass()) {
			return false;
		}
		final Authority other = (Authority) obj;
		if(id == null) {
			if(other.id != null) {
				return false;
			}
		}
		else if(!id.equals(other.id)) {
			return false;
		}
		if(name == null) {
			if(other.name != null) {
				return false;
			}
		}
		else if(!name.equals(other.name)) {
			return false;
		}
		return true;
	}
	
}
