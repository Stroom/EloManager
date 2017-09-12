package ee.stroom.match.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
	
	//Ordering by dateTime is the "correct way" but if two matches have the same timestamp, M.matchId would break the tie.
	@Query(value = "select M from Match M where M.game.name = :game_name order by M.dateTime, M.matchId")
	List<Match> getAllGameMatches(@Param("game_name") String gameName);
	
	@Query(value = "select distinct P from Match M join M.players P where M.game.name = :game_name")
	List<Player> getAllGamePlayers(@Param("game_name") String gameName);
}
