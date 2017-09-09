import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Http, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Ranking} from "app/definitions";
import {environment} from "../../../environments/environment";

@Injectable()
export class GameRankingsResolve implements Resolve<Promise<Array<Ranking>> | boolean> {
  constructor(private router: Router, private http: Http) { }

  rankings: Array<Ranking>;

  resolve(route: ActivatedRouteSnapshot): Promise<Array<Ranking>> | boolean {
    return this.getRankings(route.params.gameName).then(
      res => {
        if (res) {
          this.rankings = res;
          return this.rankings;
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

  getRankings(gameName: string): Promise<Array<Ranking>> {
    return this.http
      .get(environment.BASE_URL + '/api/games/' + gameName + '/rankings').toPromise()
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
