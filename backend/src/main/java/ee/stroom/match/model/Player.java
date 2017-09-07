package ee.stroom.match.model;

import ee.stroom.user.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

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
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long playerId;
	
	@ManyToOne
	private User user;
	
	@ManyToOne
	Match match;
	
	private BigDecimal score;
	
	public Player(User user, BigDecimal score) {
		this.user = user;
		this.score = score;
	}
}
