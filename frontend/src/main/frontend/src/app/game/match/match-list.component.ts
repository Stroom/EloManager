import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "app/authentication/authentication.service";
import {GameService} from "app/game/game.service";
import {Token, Match} from "app/definitions";
import {MatchService} from "./match.service";

@Component({
  selector: 'match-list-component',
  templateUrl: 'match-list.component.html'
})
export class MatchListComponent implements OnInit {

  token: string;

  gameName: string;
  matches: Array<Match>;

  constructor(
    private authenticationService: AuthenticationService,
    private gameService: GameService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {matches: Match[], token: Token}) => {
          this.matches = data.matches;
          this.token = data.token.token;
        },
        err => {
          console.log("Could not retrieve rankings data.");
          this.router.navigateByUrl('error');
        });
    this.route.params.subscribe(params => {
      this.gameName = params['gameName'];
    });
  }

  recalculate(): void {
    this.gameService.recalculate(this.gameName, this.token).then(
      response => this.redirectToGameRankings(),
      err => console.log("err")
    );
  }

  deleteMatch(matchId: number): void {
    this.matchService.deleteMatch(this.gameName, matchId, this.token).then(
      response => this.redirectToGameRankings(),
      err => console.log("err")
    );
  }

  private redirectToGameRankings() {
    this.router.navigateByUrl('games/' + this.gameName + '/rankings');
  }

}
