import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Http, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Match} from "app/definitions";
import {environment} from "../../../environments/environment";

@Injectable()
export class MatchListResolve implements Resolve<Promise<Array<Match>> | boolean> {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  matches: Array<Match>;

  resolve(route: ActivatedRouteSnapshot): Promise<Array<Match>> | boolean {
    return this.getMatches(route.params.gameName).then(
      res => {
        if (res) {
          this.matches = res;
          return this.matches;
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

  getMatches(gameName: string): Promise<Array<Match>> {
    return this.http
      .get(environment.BASE_URL + '/api/games/' + gameName + '/matches').toPromise()
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
