package ee.stroom.user.model;

import ee.stroom.ranking.model.Ranking;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.Collections;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	@Column(unique = true)
	@NotNull
	private String name;
	
	@OneToMany(mappedBy = "user")
	private List<Ranking> rankings;
	
	public User(String name) {
		this.name = name;
		this.rankings = Collections.emptyList();
	}
}
