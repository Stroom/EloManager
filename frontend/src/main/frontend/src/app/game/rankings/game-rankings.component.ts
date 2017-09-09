import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { GameService } from "../game.service";
import { Ranking } from "../../definitions";

@Component({
  selector: 'game-rankings-component',
  templateUrl: 'game-rankings.component.html'
})
export class GameRankingsComponent implements OnInit {

  name: string;
  rankings: Array<Ranking>;

  constructor(
    private authentication: AuthenticationService,
    private userService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {rankings: Ranking[]}) => {
          this.rankings = data.rankings;
        },
        err => {
          console.log("Could not retrieve users data.");
          this.router.navigateByUrl('error');
        });
    this.route.params.subscribe(params => {
      this.name = params['gameName'];
    });
  }

}
