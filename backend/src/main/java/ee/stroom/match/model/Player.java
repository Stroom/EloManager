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
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "serial")
	private Long playerId;
	
	@ManyToOne
	private GameUser gameUser;
	
	private BigDecimal score;
	
	public Player(GameUser gameUser, BigDecimal score) {
		this.gameUser = gameUser;
		this.score = score;
	}
}
