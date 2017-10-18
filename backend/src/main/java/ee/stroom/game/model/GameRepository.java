package ee.stroom.game.model;

import ee.stroom.match.model.Match;
import ee.stroom.ranking.model.Ranking;
import ee.stroom.user.model.GameUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
	
	@Query(value = "select R from Ranking R join R.game G where G.name = :game_name order by R.value desc")
	List<Ranking> getGameRankings(@Param("game_name") String gameName);
	
	@Query(value = "select G from Game G where G.name = :game_name order by G.name")
	Game getGameByName(@Param("game_name") String gameName);
	
	@Query(value = "select R from Ranking R join R.game G where G.name = :game_name and R.gameUser.name in :users order by R.value desc")
	List<Ranking> getGameRankingsOfUsers(@Param("game_name") String gameName, @Param("users") List<GameUser> gameUsers);
	
	@Query(value = "select M from Match M where M.game.name = :game_name order by M.dateTime desc")
	List<Match> getGameMatches(@Param("game_name") String gameName);
	
	@Query(value = "select M from Match M where M.game.name = :game_name and M.matchId = :match_id")
	Match getGameMatch(@Param("game_name") String gameName, @Param("match_id") Long matchId);
}
