package ee.stroom.security.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SiteUserRepository extends JpaRepository<SiteUser, Long> {
	
	@Query("select u from SiteUser u where u.username = ?1")
	SiteUser findByUsername(String username);
	
	@Query("select u from SiteUser u where u.id = ?1")
	SiteUser findById(Long id);
}
