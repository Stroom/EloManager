package ee.stroom.game.model;

import ee.stroom.match.model.Player;
import ee.stroom.ranking.model.Ranking;
import ee.stroom.user.model.User;
import org.javatuples.Pair;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.math.BigDecimal;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@RunWith(SpringJUnit4ClassRunner.class)
public class GameTest {
	
	@Test
	public void shouldDecideCorrectResults() throws Exception {
		Game game = new Game();
		Pair<BigDecimal, BigDecimal> results;
		
		results = game.decideResult(BigDecimal.ONE, BigDecimal.ONE);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(0.5)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(0.5)));
		
		results = game.decideResult(BigDecimal.ONE, BigDecimal.ZERO);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(1)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(0)));
		
		results = game.decideResult(BigDecimal.ZERO, BigDecimal.TEN);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(0)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(1)));
	}
	
	@Test
	public void shouldCalculateDeltas_1Win() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(1));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(0));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(1200));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1200));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(16).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(-16).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_1Tie() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(1));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(1));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(1200));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1200));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(0).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(0).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_2Win() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(1));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(0));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(1400));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1000));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(2.90909088).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(-2.90909088).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_2Lose() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(0));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(1));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(1400));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1000));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(-29.09090912).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(29.09090912).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_2Tie() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(0));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(0));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(1400));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1000));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(-13.09090912).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(13.09090912).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_3Win() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(1));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(0));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(2000));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1000));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(0.10087392).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(-0.10087392).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_3lose() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(0));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(1));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(2000));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1000));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(-31.89912608).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(31.89912608).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
	@Test
	public void shouldCalculateDeltas_3Tie() throws Exception {
		Game game = new Game();
		game.setGameType(GameType.POOL_8_BALL);
		Player player = new Player(new User("Name"), BigDecimal.valueOf(0));
		Player opponent = new Player(new User("Name"), BigDecimal.valueOf(0));
		Ranking playerRanking = new Ranking();
		playerRanking.setValue(BigDecimal.valueOf(2000));
		Ranking opponentRanking = new Ranking();
		opponentRanking.setValue(BigDecimal.valueOf(1000));
		
		Pair<BigDecimal,BigDecimal> results = game.calculateRankingDeltas(player, opponent, playerRanking, opponentRanking);
		assertThat(results.getValue0(), is(BigDecimal.valueOf(-15.89912608).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
		assertThat(results.getValue1(), is(BigDecimal.valueOf(15.89912608).setScale(8, BigDecimal.ROUND_UNNECESSARY)));
	}
	
}
