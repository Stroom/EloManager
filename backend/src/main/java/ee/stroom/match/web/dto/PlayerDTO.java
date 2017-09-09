package ee.stroom.match.web.dto;

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
		this.username = player.getUser().getName();
		this.score = player.getScore();
	}
}
