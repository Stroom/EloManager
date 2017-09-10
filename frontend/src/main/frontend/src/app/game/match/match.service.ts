import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, URLSearchParams } from "@angular/http";
import { environment } from "../../../environments/environment";
import { Game, Match } from "../../definitions";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MatchService {

  constructor(
    private http: Http
  ) {}

  addMatch(match: Match, token: string): Promise<Game> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let params = new URLSearchParams();
    params.set('token', token);
    let options = new RequestOptions({
      headers: headers,
      params: params
    });
    console.log(options);
    return this.http
      .post(environment.BASE_URL + '/api/games/' + match.gameName, JSON.stringify(match), options).toPromise()
      .then(
        response => Promise.resolve(response.json()),
        err => Promise.reject(null)
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error occurred', error);
    return Promise.reject(error.message || error);
  }
}
