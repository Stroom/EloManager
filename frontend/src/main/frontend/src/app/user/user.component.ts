import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "app/authentication/authentication.service";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'user-component',
  templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  constructor(
    private authentication: AuthenticationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //TODO find users.
  }

}
