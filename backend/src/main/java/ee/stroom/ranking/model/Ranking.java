package ee.stroom.ranking.model;

import ee.stroom.game.model.Game;
import ee.stroom.user.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
public class Ranking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long rankingId;
	
	@NotNull
	@ManyToOne
	private User user;
	
	@NotNull
	@ManyToOne
	private Game game;
	
	@NotNull
	@Column(precision = 11, scale = 5)
	private BigDecimal value;
	
}