import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Http, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Game} from "app/definitions";
import {environment} from "../../environments/environment";

@Injectable()
export class GameResolve implements Resolve<Promise<Array<Game>> | boolean> {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  games: Array<Game>;

  resolve(route: ActivatedRouteSnapshot): Promise<Array<Game>> | boolean {
    return this.getGames().then(
      res => {
        if (res) {
          this.games = res;
          return this.games;
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

  getGames(): Promise<Array<Game>> {
    return this.http
      .get(environment.BASE_URL + '/api/games').toPromise()
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
