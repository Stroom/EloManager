import { Component } from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Elo Manager';

  constructor(private authentication: AuthenticationService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    if(this.authentication.isLoggedIn() && !this.authentication.hasRoles()) {
      console.log("asking for roles.");
      this.authentication.authenticateForRoles();
    }
  }

  isLoggedIn(): boolean {
    return this.authentication.isLoggedIn();
  }

  roleIs(roles: string[]): boolean {
    return this.authentication.hasRole(roles);
  }

  logout(): void {
    this.authentication.logout();
    this.router.navigateByUrl('');
  }
}
