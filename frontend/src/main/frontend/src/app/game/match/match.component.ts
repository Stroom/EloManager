import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from "@angular/router";
import {AuthenticationService} from "app/authentication/authentication.service";
import {MatchService} from "./match.service";
import {Match, Token} from "../../definitions";

@Component({
  selector: 'match-component',
  templateUrl: 'match.component.html'
})
export class MatchComponent implements OnInit {

  token: string;
  gameName: string = "";
  match: Match;

  constructor(
    private authenticationService: AuthenticationService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {token: Token}) => {
          this.token = data.token.token;
        },
        err => {
          console.log("Could not retrieve rankings data.");
          this.router.navigateByUrl('error');
        });
    this.route.params.subscribe(params => {
      this.gameName = params['gameName'];
      this.match = new Match();
      this.match.gameName = this.gameName;
    });
  }

  onSubmit(): void {
    //Convert string inputs of scores to numbers
    for(var i = 0; i < this.match.players.length; i++){
      this.match.players[i].score = Number(this.match.players[i].score);
    }
    this.matchService.addMatch(this.match, this.token).then(
      response => this.redirectToGameRankings(),
      err => console.log("err")
    );
  }

  private redirectToGameRankings() {
    this.router.navigateByUrl('games/' + this.gameName + '/rankings');
  }

}
