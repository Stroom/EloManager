import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { UserService } from "app/user/user.service";
import { User } from "../definitions";

@Component({
  selector: 'user-component',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  users: Array<User>;

  constructor(
    private authentication: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data
      .subscribe((data: {users: User[]}) => {
          this.users = data.users;
        },
        err => {
          console.log("Could not retrieve users data.");
          this.router.navigateByUrl('error');
        });
  }

}
