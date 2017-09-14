import {Injectable} from "@angular/core";
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {AuthenticationService} from "../authentication/authentication.service";
import {environment} from "../../environments/environment";

import 'rxjs/add/operator/toPromise';
import {Match} from "../definitions";

@Injectable()
export class GameService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {}

  recalculate(gameName: string, token: string) {
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
      .post(environment.BASE_URL + '/api/games/' + gameName + '/recalculate', {}, options).toPromise()
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
