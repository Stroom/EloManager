package ee.stroom.security.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {
	
	@Query("select a from Authority a where a.name = ?1")
	Authority findByName(String name);
	
}
