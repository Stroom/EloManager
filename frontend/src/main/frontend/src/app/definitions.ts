export class LoginResponse {
  token: string;
  authorities: Array<string>;
}

export class Game {
  name: string;
}

export class User {
  userName: string;
  rankings: Array<Ranking>;
}

export class Ranking {
  userName: string;
  gameName: string;
  value: number;
}

export class Match {
  gameName: string;
  players: Array<Player>;
}

export class Player {
  userName: string;
  score: number;
}
