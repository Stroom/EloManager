import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Http, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { User } from "app/definitions";
import { environment } from "../../environments/environment";

@Injectable()
export class UserResolve implements Resolve<Promise<Array<User>> | boolean> {
  constructor(private router: Router, private http: Http) { }

  users: Array<User>;

  resolve(route: ActivatedRouteSnapshot): Promise<Array<User>> | boolean {
    return this.getUsers().then(
      res => {
        if (res) {
          this.users = res;
          return this.users;
        }
        else {
          this.router.navigateByUrl('error');
          return null;
        }
      }
    )
      .catch(err => {
        this.router.navigateByUrl('error');
        return null;
      });
  }

  getUsers(): Promise<Array<User>> {
    return this.http
      .get(environment.BASE_URL + '/api/users').toPromise()
      .then(
        response => response.json(),
        err => null
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error occurred', error);
    return Promise.reject(error.message || error);
  }

}
