package ee.stroom.game.model;

import ee.stroom.match.model.Player;
import ee.stroom.ranking.model.Ranking;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.javatuples.Pair;
import org.nevec.rjm.BigDecimalMath;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Entity
@Data
@NoArgsConstructor
public class Game {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(columnDefinition = "serial")
	private Long gameId;
	
	@NotNull
	@Column(unique = true)
	private String name;
	
	@Enumerated(EnumType.STRING)
	private GameType gameType;
	
	public BigDecimal getInitialRanking() {
		return gameType.getInitialRanking();
	}
	
	//TODO these are gameService methods? Maybe should be implemented under gametype? Maybe game needs a rankingtype and that is implemented there?
	
	/**
	 * Return 1 if the player wins, 0 if there is a draw and -1 if the opponent wins.
	 * TODO maybe move it under gameType
	 */
	Pair<BigDecimal, BigDecimal> decideResult(BigDecimal playerScore, BigDecimal opponentScore) {
		BigDecimal delta = playerScore.subtract(opponentScore);
		int result = delta.compareTo(BigDecimal.ZERO);
		if(result > 0) {
			return new Pair<>(BigDecimal.valueOf(1), BigDecimal.valueOf(0));
		} else if(result < 0) {
			return new Pair<>(BigDecimal.valueOf(0), BigDecimal.valueOf(1));
		} else {
			return new Pair<>(BigDecimal.valueOf(0.5), BigDecimal.valueOf(0.5));
		}
	}
	
	/**
	 * Return the ranking deltas between the two players.
	 * TODO maybe move under gameType
	 * Taken from https://dataskeptic.com/blog/methods/2017/calculating-an-elo-rating
	 */
	public Pair<BigDecimal,BigDecimal> calculateRankingDeltas(Player player, Player opponent, Ranking playerRanking, Ranking opponentRanking) {
		BigDecimal playerR = BigDecimalMath.pow(BigDecimal.valueOf(10.0).setScale(8),
				playerRanking.getValue().setScale(8).divide(BigDecimal.valueOf(400.0).setScale(8), 8, RoundingMode.HALF_UP)).setScale(8);
		BigDecimal opponentR = BigDecimalMath.pow(BigDecimal.valueOf(10.0).setScale(8),
				opponentRanking.getValue().setScale(8).divide(BigDecimal.valueOf(400.0).setScale(8), 8, RoundingMode.HALF_UP)).setScale(8);
		
		BigDecimal playerE = playerR.divide(playerR.add(opponentR), 8, RoundingMode.HALF_UP);
		BigDecimal opponentE = opponentR.divide(playerR.add(opponentR), 8, RoundingMode.HALF_UP);
		
		Pair<BigDecimal, BigDecimal> result = decideResult(player.getScore(), opponent.getScore());
		
		BigDecimal playerDelta = gameType.getScalingValue().multiply(result.getValue0().subtract(playerE));
		BigDecimal opponentDelta = gameType.getScalingValue().multiply(result.getValue1().subtract(opponentE));
		
		return new Pair<BigDecimal, BigDecimal>(playerDelta, opponentDelta);
	}
	
}
