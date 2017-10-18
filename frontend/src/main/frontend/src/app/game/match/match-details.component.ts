import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../authentication/authentication.service";
import {Token, Match} from "../../definitions";
import {MatchService} from "./match.service";

@Component({
  selector: 'match-details-component',
  templateUrl: 'match-details.component.html'
})
export class MatchDetailsComponent implements OnInit {

  token: string;

  gameName: string;
  matchId: string;
  match: Match;

  constructor(
    private authenticationService: AuthenticationService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {match: Match, token: Token}) => {
          this.match = data.match;
          this.token = data.token.token;
        },
        err => {
          console.log("Could not retrieve rankings data.");
          this.router.navigateByUrl('error');
        });
    this.route.params.subscribe(params => {
      this.gameName = params['gameName'];
      this.matchId = params['matchId'];
    });
  }

  onSubmit(): void {
    //Convert string inputs of scores to numbers
    for(var i = 0; i < this.match.players.length; i++){
      this.match.players[i].score = Number(this.match.players[i].score);
    }
    this.matchService.updateMatch(this.gameName, this.matchId, this.match, this.token).then(
      response => this.redirectToGameMatches(),
      err => console.log("err")
    );
  }

  private redirectToGameMatches() {
    this.router.navigateByUrl('games/' + this.gameName + '/matches');
  }

}
