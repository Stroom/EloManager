package ee.stroom.ranking.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, Long> {
	
	@Query(value = "select R from Ranking R where R.user.name = :username and R.game.name = :game_name")
	Ranking getUserGameRanking(@Param("username") String username, @Param("game_name") String gameName);
}
