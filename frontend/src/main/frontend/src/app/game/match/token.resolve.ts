import {Injectable } from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Http, RequestOptions, Headers } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Token } from "app/definitions";
import {environment } from "../../../environments/environment";
import {AuthenticationService} from "../../authentication/authentication.service";

@Injectable()
export class TokenResolve implements Resolve<Promise<Token> | boolean> {
  constructor(
    private router: Router,
    private http: Http,
    private authenticationService: AuthenticationService
  ) { }

  token: Token;

  resolve(route: ActivatedRouteSnapshot): Promise<Token> | boolean {
    return this.getToken(route.params.gameName).then(
      res => {
        if (res) {
          this.token = res;
          return this.token;
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

  getToken(gameName: string): Promise<Token> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.authenticationService.getToken()
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .get(environment.BASE_URL + '/api/games/' + gameName + '/token', options).toPromise()
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
