package ee.stroom.ranking.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, Long> {
	
	@Query(value = "select R from Ranking R where R.gameUser.name = :username and R.game.name = :game_name")
	Ranking getUserGameRanking(@Param("username") String username, @Param("game_name") String gameName);
	
	@Query(value = "select R from Ranking R where R.game.name = :game_name")
	List<Ranking> getAllGameRankings(@Param("game_name") String gameName);
	
}
