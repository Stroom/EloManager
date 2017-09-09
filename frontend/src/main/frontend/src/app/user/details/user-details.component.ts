import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { UserService } from "app/user/user.service";
import { User } from "app/definitions";

@Component({
  selector: 'user-details-component',
  templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(
    private authentication: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {user: User}) => {
          this.user = data.user;
        },
        err => {
          console.log("Could not retrieve user data.");
          this.router.navigateByUrl('error');
        });
  }

}
