package ee.stroom.match.web.dto;

import ee.stroom.match.model.Match;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class MatchDTO {
	private String gameName;
	private List<PlayerDTO> players;
	
	public MatchDTO(Match match) {
		this.gameName = match.getGame().getName();
		if(match.getPlayers() == null || match.getPlayers().isEmpty()) {
			throw new NullPointerException("Match has no players");
		}
		this.players = match.getPlayers().stream().map(player -> new PlayerDTO(player)).collect(Collectors.toList());
	}
}
