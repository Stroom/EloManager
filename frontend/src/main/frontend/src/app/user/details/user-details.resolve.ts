import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Http, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {User} from "app/definitions";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserDetailsResolve implements Resolve<Promise<User> | boolean> {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  user: User;

  resolve(route: ActivatedRouteSnapshot): Promise<User> | boolean {
    return this.getUsers(route.params.username).then(
      res => {
        if (res) {
          this.user = res;
          return this.user;
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

  getUsers(username: string): Promise<User> {
    return this.http
      .get(environment.BASE_URL + '/api/users/'+ username).toPromise()
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
