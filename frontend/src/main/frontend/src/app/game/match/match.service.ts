import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {environment} from "../../../environments/environment";
import {Game, Match} from "../../definitions";

import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "../../authentication/authentication.service";

@Injectable()
export class MatchService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {}

  addMatch(match: Match, token: string): Promise<Game> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.authenticationService.getToken()
    });
    let params = new URLSearchParams();
    params.set('token', token);
    let options = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http
      .post(environment.BASE_URL + '/api/games/' + match.gameName, JSON.stringify(match), options).toPromise()
      .then(
        response => Promise.resolve(response.json()),
        err => Promise.reject(null)
      )
      .catch(this.handleError);
  }

  updateMatch(gameName: string, matchId: string, match: Match, token: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.authenticationService.getToken()
    });
    let params = new URLSearchParams();
    params.set('token', token);
    let options = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http
      .post(environment.BASE_URL + '/api/games/' + gameName + '/matches/' + matchId, match, options).toPromise()
      .then(
        response => Promise.resolve(response.json()),
        err => Promise.reject(null)
      )
      .catch(this.handleError);
  }

  deleteMatch(gameName : string, matchId: number, token: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.authenticationService.getToken()
    });
    let params = new URLSearchParams();
    params.set('token', token);
    let options = new RequestOptions({
      headers: headers,
      params: params
    });
    return this.http
      .delete(environment.BASE_URL + '/api/games/' + gameName + '/matches/' + matchId, options).toPromise()
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
