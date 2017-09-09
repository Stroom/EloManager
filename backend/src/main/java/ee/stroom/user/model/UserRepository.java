package ee.stroom.user.model;

import ee.stroom.match.web.dto.MatchDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query(value = "select U from User U where U.name = :username")
	User findByName(@Param("username") String username);
	
	@Query(value = "select M from Player P join P.match M where P.user.name = :username order by M.dateTime desc")
	List<MatchDTO> getUserMatches(@Param("username") String username);
}
