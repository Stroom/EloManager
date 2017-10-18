import {Component} from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Elo Manager';

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.authenticationService.isLoggedIn() && !this.authenticationService.hasRoles()) {
      this.authenticationService.authenticateForRoles();
    }
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  roleIs(roles: string[]): boolean {
    return this.authenticationService.hasRole(roles);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl('');
  }
}
