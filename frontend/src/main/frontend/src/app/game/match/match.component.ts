import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { MatchService } from "./match.service";
import { Match, Player } from "../../definitions";

@Component({
  selector: 'match-component',
  templateUrl: 'match.component.html'
})
export class MatchComponent implements OnInit {

  gameName: string = "";

  match: Match;

  constructor(
    private authentication: AuthenticationService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameName = params['gameName'];
      this.match = new Match();
      this.match.gameName = this.gameName;
    });
  }

  onSubmit(): void {
    //TODO validate inputs and throw errors.

    //Convert string inputs of scores to numbers
    for(var i = 0; i < this.match.players.length; i++){
      this.match.players[i].score = Number(this.match.players[i].score);
    }
    this.matchService.addMatch(this.match).then(
      response => console.log(response),
      err => console.log("err")
    );
    //TODO redirect.
  }

}
