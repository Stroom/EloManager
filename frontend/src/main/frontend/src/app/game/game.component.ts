import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import {GameService} from "./game.service";

@Component({
  selector: 'game-component',
  templateUrl: 'game.component.html'
})
export class GameComponent implements OnInit {

  constructor(
    private authentication: AuthenticationService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //TODO find games.
  }

}
