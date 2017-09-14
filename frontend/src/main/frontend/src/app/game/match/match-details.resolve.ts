import {Injectable} from '@angular/core';
import {Router, Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {Http, RequestOptions} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Match} from "../../definitions";
import {environment} from "../../../environments/environment";

@Injectable()
export class MatchDetailsResolve implements Resolve<Promise<Match> | boolean> {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  match: Match;

  resolve(route: ActivatedRouteSnapshot): Promise<Match> | boolean {
    return this.getMatch(route.params.gameName, route.params.matchId).then(
      res => {
        if (res) {
          this.match = res;
          return this.match;
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

  getMatch(gameName: string, matchId: number): Promise<Match> {
    return this.http
      .get(environment.BASE_URL + '/api/games/' + gameName + '/matches/' + matchId).toPromise()
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
