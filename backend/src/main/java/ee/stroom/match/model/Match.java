package ee.stroom.match.model;

import ee.stroom.game.model.Game;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Match {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="match_id_seq")
	@SequenceGenerator(name="match_id_seq", sequenceName="match_id_seq", allocationSize=1)
	@Column(columnDefinition = "bigserial")
	private Long matchId;
	private LocalDateTime dateTime;
	
	@ManyToOne
	private Game game;
	@OneToMany(fetch = FetchType.EAGER)
	private List<Player> players;
	
	public Match(Game game) {
		this.dateTime = LocalDateTime.now();
		this.game = game;
		this.players = new ArrayList<Player>();
	}
	
}
