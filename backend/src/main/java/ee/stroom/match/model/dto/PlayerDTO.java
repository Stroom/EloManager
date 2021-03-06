package ee.stroom.match.model.dto;

import ee.stroom.match.model.Player;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class PlayerDTO {
	private String username;
	private BigDecimal score;
	
	public PlayerDTO(Player player) {
		this.username = player.getGameUser().getName();
		this.score = player.getScore();
	}
}
