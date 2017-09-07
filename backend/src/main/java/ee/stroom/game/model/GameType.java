package ee.stroom.game.model;

import lombok.Getter;

import java.math.BigDecimal;

@Getter
public enum GameType {
	POOL_8_BALL (BigDecimal.valueOf(1200), BigDecimal.valueOf(32)),
	POOL_9_BALL (BigDecimal.valueOf(1200), BigDecimal.valueOf(32)),
	CHESS (BigDecimal.valueOf(1200), BigDecimal.valueOf(32));
	
	private final BigDecimal initialRanking;
	private final BigDecimal scalingValue;
	//TODO maybe add some parameters for team game options etc? Or move all this under Game class.
	//TODO maybe have abstract game or make game implement something that calculates stuff differently.
	
	GameType(BigDecimal initialRanking, BigDecimal scalingValue) {
		this.initialRanking = initialRanking;
		this.scalingValue = scalingValue;
	}
}
