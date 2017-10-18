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
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotNull;
import java.util.Collections;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class GameUser {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="game_user_id_seq")
	@SequenceGenerator(name="game_user_id_seq", sequenceName="game_user_id_seq", allocationSize=1)
	@Column(columnDefinition = "bigserial")
	private Long userId;
	
	@Column(unique = true)
	@NotNull
	private String name;
	
	@OneToMany(mappedBy = "gameUser")
	private List<Ranking> rankings;
	
	public GameUser(String name) {
		this.name = name;
		this.rankings = Collections.emptyList();
	}
}
