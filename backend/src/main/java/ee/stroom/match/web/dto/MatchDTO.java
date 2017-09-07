package ee.stroom.match.web.dto;

import ee.stroom.match.model.Match;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class MatchDTO {
	private String game;
	private List<PlayerDTO> players;
	
	public MatchDTO(Match match) {
		this.game = match.getGame().getName();
		this.players = match.getPlayers().stream().map(player -> new PlayerDTO(player)).collect(Collectors.toList());
	}
}
