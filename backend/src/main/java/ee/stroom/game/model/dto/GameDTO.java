package ee.stroom.game.model.dto;

import ee.stroom.game.model.Game;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GameDTO {
	
	private String name;
	
	public GameDTO(Game game) {
		this.name = game.getName();
	}
	
}
