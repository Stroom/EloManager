import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { GameService } from "./game.service";
import { Game } from "app/definitions";

@Component({
  selector: 'game-component',
  templateUrl: 'game.component.html'
})
export class GameComponent implements OnInit {

  games: Array<Game>;

  constructor(
    private authentication: AuthenticationService,
    private userService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {games: Game[]}) => {
          this.games = data.games;
        },
        err => {
          console.log("Could not retrieve games data.");
          this.router.navigateByUrl('error');
        });
  }

}
