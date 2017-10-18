package ee.stroom.match.model;

import ee.stroom.user.model.GameUser;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="player_id_seq")
	@SequenceGenerator(name="player_id_seq", sequenceName="player_id_seq", allocationSize=1)
	@Column(columnDefinition = "bigserial")
	private Long playerId;
	
	@ManyToOne
	private GameUser gameUser;
	
	private BigDecimal score;
	
	public Player(GameUser gameUser, BigDecimal score) {
		this.gameUser = gameUser;
		this.score = score;
	}
}
