package ee.stroom.ranking.model.dto;

import ee.stroom.ranking.model.Ranking;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class RankingDTO {
	
	private String username;
	private String gameName;
	private BigDecimal value;
	
	public RankingDTO(Ranking ranking) {
		this.username = ranking.getUser().getName();
		this.gameName = ranking.getGame().getName();
		this.value = ranking.getValue();
	}
}
