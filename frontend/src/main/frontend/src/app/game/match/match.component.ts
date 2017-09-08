import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { MatchService } from "./match.service";

@Component({
  selector: 'match-component',
  templateUrl: 'match.component.html'
})
export class MatchComponent {

  constructor(
    private authentication: AuthenticationService,
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

}
