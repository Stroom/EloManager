import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HomeComponent} from "./home.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AuthenticationService} from "./authentication/authentication.service";
import {CanActivateAuthGuard} from "./authentication/can-activate.authguard";
import {UserComponent} from "./user/user.component";
import {UserService} from "./user/user.service";
import {MatchComponent} from "./game/match/match.component";
import {MatchService} from "./game/match/match.service";
import {GameComponent} from "./game/game.component";
import {GameService} from "./game/game.service";
import {RegistrationComponent} from "./authentication/registration/registration.component";
import {UserResolve} from "./user/user.resolve";
import {GameResolve} from "./game/game.resolve";
import {GameRankingsComponent} from "./game/rankings/game-rankings.component";
import {GameRankingsResolve} from "./game/rankings/game-rankings.resolve";
import {UserDetailsComponent} from "./user/details/user-details.component";
import {UserDetailsResolve} from "./user/details/user-details.resolve";
import {TokenResolve} from "./game/match/token.resolve";
import {RoundPipe} from "./util";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'games',
    component: GameComponent,
    resolve: { games: GameResolve }
  },
  {
    path: 'games/:gameName/rankings',//TODO use gameId?
    component: GameRankingsComponent,
    resolve: {
      rankings: GameRankingsResolve,
      token: TokenResolve
    }
  },
  {
    path: 'games/:gameName/match',
    component: MatchComponent,
    resolve: { token: TokenResolve },
    canActivate: [ CanActivateAuthGuard ]
  },
  {
    path: 'users',
    component: UserComponent,
    resolve: { users: UserResolve }
  },
  {
    path: 'users/:username',
    component: UserDetailsComponent,
    resolve: { user: UserDetailsResolve }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  //TODO add default error page.
  {
    path: 'error',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    RegistrationComponent,
    MatchComponent,
    GameComponent,
    GameRankingsComponent,
    UserComponent,
    UserDetailsComponent,

    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationService,
    CanActivateAuthGuard,

    MatchService,
    GameService,
    UserService,

    GameResolve,
    GameRankingsResolve,
    TokenResolve,
    UserResolve,
    UserDetailsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
