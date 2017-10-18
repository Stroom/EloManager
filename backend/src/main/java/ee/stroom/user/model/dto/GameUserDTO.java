package ee.stroom.user.model.dto;

import ee.stroom.ranking.model.dto.RankingDTO;
import ee.stroom.user.model.GameUser;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class GameUserDTO {
	
	private String username;
	
	private List<RankingDTO> rankings;
	
	public GameUserDTO(GameUser gameUser) {
		this.username = gameUser.getName();
		if(gameUser.getRankings() != null && !gameUser.getRankings().isEmpty()) {
			this.rankings = gameUser.getRankings().stream()
					.map(ranking -> new RankingDTO(ranking))
					.sorted(new Comparator<RankingDTO>() {
							@Override
							public int compare(RankingDTO o1, RankingDTO o2) {
								return o1.getValue().compareTo(o2.getValue());
							}
					}
					.reversed())
					.collect(Collectors.toList());
		}
		else {
			this.rankings = Collections.emptyList();
		}
	}
}
