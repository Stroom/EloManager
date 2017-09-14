import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "app/authentication/authentication.service";
import {GameService} from "app/game/game.service";
import {Ranking, Token} from "app/definitions";

@Component({
  selector: 'game-rankings-component',
  templateUrl: 'game-rankings.component.html'
})
export class GameRankingsComponent implements OnInit {

  gameName: string;
  rankings: Array<Ranking>;

  constructor(
    private authenticationService: AuthenticationService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {rankings: Ranking[]}) => {
          this.rankings = data.rankings;
        },
        err => {
          console.log("Could not retrieve rankings data.");
          this.router.navigateByUrl('error');
        });
    this.route.params.subscribe(params => {
      this.gameName = params['gameName'];
    });
  }

}
