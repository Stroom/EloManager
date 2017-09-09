export class LoginResponse {
  token: string;
  authorities: Array<string>;
}

export class Game {
  name: string;
}

export class User {
  username: string;
  rankings: Array<Ranking>;
}

export class Ranking {
  username: string;
  gameName: string;
  value: number;
}

export class Match {
  gameName: string;
  players: Array<Player>;

  constructor() {
    this.gameName = "";
    this.players = new Array<Player>();
    this.players[0] = new Player("", 0);
    this.players[1] = new Player("", 0);
  }
}

export class Player {
  username: string;
  score: number;

  constructor(username: string, score:number) {
    this.username = username;
    this.score = score;
  }
}
