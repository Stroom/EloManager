package ee.stroom.user.web.dto;

import ee.stroom.ranking.web.dto.RankingDTO;
import ee.stroom.user.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class UserDTO {
	
	private String userName;
	
	private List<RankingDTO> rankings;
	
	public UserDTO(User user) {
		this.userName = user.getName();
		if(user.getRankings() != null && !user.getRankings().isEmpty()) {
			this.rankings = user.getRankings().stream().map(ranking -> new RankingDTO(ranking)).collect(Collectors.toList());
		}
		else {
			this.rankings = Collections.emptyList();
		}
	}
}
