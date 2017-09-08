import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    component: GameComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'match',
    component: MatchComponent,
    canActivate: [ CanActivateAuthGuard ]
  }
  //TODO add default error page.
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    RegistrationComponent,
    MatchComponent,
    GameComponent,
    UserComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
