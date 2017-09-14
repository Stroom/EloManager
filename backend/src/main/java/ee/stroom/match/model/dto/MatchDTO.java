package ee.stroom.match.model.dto;

import ee.stroom.match.model.Match;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class MatchDTO {
	
	private Long matchId;
	private LocalDateTime dateTime;
	
	private String gameName;
	private List<PlayerDTO> players;
	
	public MatchDTO(Match match) {
		if(match == null) {
			return;
		}
		this.matchId = match.getMatchId();
		this.dateTime = match.getDateTime();
		this.gameName = match.getGame().getName();
		if(match.getPlayers() == null || match.getPlayers().isEmpty()) {
			throw new NullPointerException("Match has no players");
		}
		this.players = match.getPlayers().stream().map(PlayerDTO::new).collect(Collectors.toList());
	}
}
