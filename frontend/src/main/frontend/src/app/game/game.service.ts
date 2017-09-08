import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class GameService {

  constructor(
    private http: Http
  ) {}

}
