webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-default navbar-static-top\">\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/\">Home</a>\n\n      <li><a routerLink=\"/users\">Users</a>\n      <li><a routerLink=\"/games\">Games</a>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/login\">Log in</a>\n      <li *ngIf=\"!isLoggedIn()\"><a routerLink=\"/register\">Register</a>\n      <li *ngIf=\"isLoggedIn()\"><a href=\"javascript:void(0)\" (click)=\"logout()\">Log out</a>\n    </ul>\n  </nav>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authenticationService, route, router) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
        this.title = 'Elo Manager';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.authenticationService.isLoggedIn() && !this.authenticationService.hasRoles()) {
            console.log("asking for roles.");
            this.authenticationService.authenticateForRoles();
        }
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent.prototype.roleIs = function (roles) {
        return this.authenticationService.hasRole(roles);
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigateByUrl('');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_component__ = __webpack_require__("../../../../../src/app/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__authentication_can_activate_authguard__ = __webpack_require__("../../../../../src/app/authentication/can-activate.authguard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_match_match_component__ = __webpack_require__("../../../../../src/app/game/match/match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_match_match_service__ = __webpack_require__("../../../../../src/app/game/match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__game_game_service__ = __webpack_require__("../../../../../src/app/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__authentication_registration_registration_component__ = __webpack_require__("../../../../../src/app/authentication/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_resolve__ = __webpack_require__("../../../../../src/app/user/user.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__game_game_resolve__ = __webpack_require__("../../../../../src/app/game/game.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__game_rankings_game_rankings_component__ = __webpack_require__("../../../../../src/app/game/rankings/game-rankings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__game_rankings_game_rankings_resolve__ = __webpack_require__("../../../../../src/app/game/rankings/game-rankings.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user/details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_details_user_details_resolve__ = __webpack_require__("../../../../../src/app/user/details/user-details.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__authentication_token_resolve__ = __webpack_require__("../../../../../src/app/authentication/token.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__util__ = __webpack_require__("../../../../../src/app/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__game_match_match_list_component__ = __webpack_require__("../../../../../src/app/game/match/match-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__game_match_match_list_resolve__ = __webpack_require__("../../../../../src/app/game/match/match-list.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__game_match_match_details_component__ = __webpack_require__("../../../../../src/app/game/match/match-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__game_match_match_details_resolve__ = __webpack_require__("../../../../../src/app/game/match/match-details.resolve.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_component__["a" /* AuthenticationComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_16__authentication_registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: 'games',
        component: __WEBPACK_IMPORTED_MODULE_14__game_game_component__["a" /* GameComponent */],
        resolve: { games: __WEBPACK_IMPORTED_MODULE_18__game_game_resolve__["a" /* GameResolve */] }
    },
    {
        path: 'games/:gameName/rankings',
        component: __WEBPACK_IMPORTED_MODULE_19__game_rankings_game_rankings_component__["a" /* GameRankingsComponent */],
        resolve: { rankings: __WEBPACK_IMPORTED_MODULE_20__game_rankings_game_rankings_resolve__["a" /* GameRankingsResolve */] }
    },
    {
        path: 'games/:gameName/matches',
        component: __WEBPACK_IMPORTED_MODULE_25__game_match_match_list_component__["a" /* MatchListComponent */],
        resolve: {
            matches: __WEBPACK_IMPORTED_MODULE_26__game_match_match_list_resolve__["a" /* MatchListResolve */],
            token: __WEBPACK_IMPORTED_MODULE_23__authentication_token_resolve__["a" /* TokenResolve */]
        }
    },
    {
        path: 'games/:gameName/matches/:matchId',
        component: __WEBPACK_IMPORTED_MODULE_28__game_match_match_details_component__["a" /* MatchDetailsComponent */],
        resolve: {
            match: __WEBPACK_IMPORTED_MODULE_29__game_match_match_details_resolve__["a" /* MatchDetailsResolve */],
            token: __WEBPACK_IMPORTED_MODULE_23__authentication_token_resolve__["a" /* TokenResolve */]
        }
    },
    {
        path: 'games/:gameName/match',
        component: __WEBPACK_IMPORTED_MODULE_12__game_match_match_component__["a" /* MatchComponent */],
        resolve: { token: __WEBPACK_IMPORTED_MODULE_23__authentication_token_resolve__["a" /* TokenResolve */] },
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__authentication_can_activate_authguard__["a" /* CanActivateAuthGuard */]]
    },
    {
        path: 'users',
        component: __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */],
        resolve: { users: __WEBPACK_IMPORTED_MODULE_17__user_user_resolve__["a" /* UserResolve */] }
    },
    {
        path: 'users/:username',
        component: __WEBPACK_IMPORTED_MODULE_21__user_details_user_details_component__["a" /* UserDetailsComponent */],
        resolve: { user: __WEBPACK_IMPORTED_MODULE_22__user_details_user_details_resolve__["a" /* UserDetailsResolve */] }
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__authentication_authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__authentication_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__game_match_match_component__["a" /* MatchComponent */],
            __WEBPACK_IMPORTED_MODULE_28__game_match_match_details_component__["a" /* MatchDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__game_match_match_list_component__["a" /* MatchListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_19__game_rankings_game_rankings_component__["a" /* GameRankingsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_21__user_details_user_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__util__["a" /* RoundPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_27_angular2_moment__["MomentModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__authentication_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__authentication_can_activate_authguard__["a" /* CanActivateAuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13__game_match_match_service__["a" /* MatchService */],
            __WEBPACK_IMPORTED_MODULE_15__game_game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_18__game_game_resolve__["a" /* GameResolve */],
            __WEBPACK_IMPORTED_MODULE_20__game_rankings_game_rankings_resolve__["a" /* GameRankingsResolve */],
            __WEBPACK_IMPORTED_MODULE_29__game_match_match_details_resolve__["a" /* MatchDetailsResolve */],
            __WEBPACK_IMPORTED_MODULE_26__game_match_match_list_resolve__["a" /* MatchListResolve */],
            __WEBPACK_IMPORTED_MODULE_23__authentication_token_resolve__["a" /* TokenResolve */],
            __WEBPACK_IMPORTED_MODULE_17__user_user_resolve__["a" /* UserResolve */],
            __WEBPACK_IMPORTED_MODULE_22__user_details_user_details_resolve__["a" /* UserDetailsResolve */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Log in</h3>\r\n<input type=\"text\" [(ngModel)]=\"username\" (keyup.enter)=\"login()\">\r\n<input type=\"password\" [(ngModel)]=\"password\" (keyup.enter)=\"login()\">\r\n<button (click)=\"login()\">Login</button>\r\n<div>{{error}}</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = (function () {
    function AuthenticationComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
        this.username = "";
        this.password = "";
        this.error = "";
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        if (this.authentication.isLoggedIn()) {
            this.authentication.logout();
        }
    };
    AuthenticationComponent.prototype.login = function () {
        var _this = this;
        this.authentication.authenticate(this.username, this.password).subscribe(function (res) {
            if (res === true) {
                _this.error = "";
                _this.successfulLogin();
            }
            else {
                _this.error = "Username or password is incorrect";
            }
        }, function (err) {
            _this.error = "Username or password is incorrect";
        });
    };
    AuthenticationComponent.prototype.successfulLogin = function () {
        this.router.navigateByUrl('');
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/authentication/authentication.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthenticationComponent);

var _a, _b;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        var _this = this;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].BASE_URL + '/auth/login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .map(function (res) {
            var response = res.json();
            var token = response.token;
            if (token) {
                localStorage.setItem('EloManagerUser', JSON.stringify({ username: username, token: token }));
            }
            else {
                localStorage.removeItem('EloManagerRoles');
                return false;
            }
            localStorage.setItem('EloManagerRoles', JSON.stringify({ roles: response.authorities }));
            return true;
        }, function (err) { return null; })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthenticationService.prototype.authenticateForRoles = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].BASE_URL + '/auth/roles', { headers: headers }).toPromise().then(function (res) {
            var roles = res.json();
            localStorage.setItem('EloManagerRoles', JSON.stringify({ roles: roles }));
            return true;
        });
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        return token && token.length > 0;
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('EloManagerUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.getRoles = function () {
        var container = JSON.parse(localStorage.getItem('EloManagerRoles'));
        var roles = container && container.roles;
        return roles ? roles : null;
    };
    AuthenticationService.prototype.hasToken = function () {
        return localStorage.getItem('EloManagerUser') != null;
    };
    AuthenticationService.prototype.hasRoles = function () {
        return localStorage.getItem('EloManagerRoles') != null;
    };
    AuthenticationService.prototype.hasRole = function (roles) {
        if (roles != null && roles.length > 0 && this.getRoles() != null && this.getRoles().length > 0) {
            return this.getRoles().filter(function (role) { return roles.indexOf(role) >= 0; }).length > 0;
        }
        return false;
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        localStorage.removeItem('EloManagerUser');
        localStorage.removeItem('EloManagerRoles');
        this.http.post(__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].BASE_URL + '/auth/logout', JSON.stringify({}), { headers: this.headers }).toPromise()
            .then(function (res) { return res; })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthenticationService.prototype.register = function (username, password) {
        localStorage.setItem('code', btoa(username + ':' + password));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].BASE_URL + '/auth/register', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .map(function (res) {
            return true;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/can-activate.authguard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    CanActivateAuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return CanActivateAuthGuard;
}());
CanActivateAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], CanActivateAuthGuard);

var _a, _b;
//# sourceMappingURL=can-activate.authguard.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Register new user</h3>\r\n<h2>Currently this is pretty much useless. No connection to the actual players.</h2>\r\n<h1>Just insert the new name when inserting a new match.<br/>Player is created automatically.</h1>\r\n<input type=\"text\" [(ngModel)]=\"username\" (keyup.enter)=\"register()\">\r\n<input type=\"password\" [(ngModel)]=\"password\" (keyup.enter)=\"register()\">\r\n<button (click)=\"register()\">Register</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/authentication/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = (function () {
    function RegistrationComponent(authentication, router) {
        this.authentication = authentication;
        this.router = router;
    }
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.authentication.register(this.username, this.password).subscribe(function (res) { return _this.successfulRegister(); });
    };
    RegistrationComponent.prototype.successfulRegister = function () {
        this.router.navigateByUrl('login');
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/authentication/registration/registration.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/token.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenResolve = (function () {
    function TokenResolve(router, http, authenticationService) {
        this.router = router;
        this.http = http;
        this.authenticationService = authenticationService;
    }
    TokenResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getToken(route.params.gameName).then(function (res) {
            if (res) {
                _this.token = res;
                return _this.token;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    TokenResolve.prototype.getToken = function (gameName) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.authenticationService.getToken()
        });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestOptions */]({
            headers: headers
        });
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/token', options).toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    TokenResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return TokenResolve;
}());
TokenResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], TokenResolve);

var _a, _b, _c;
//# sourceMappingURL=token.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/definitions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LoginResponse */
/* unused harmony export Game */
/* unused harmony export User */
/* unused harmony export Ranking */
/* unused harmony export Token */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Match; });
/* unused harmony export Player */
var LoginResponse = (function () {
    function LoginResponse() {
    }
    return LoginResponse;
}());

var Game = (function () {
    function Game() {
    }
    return Game;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

var Ranking = (function () {
    function Ranking() {
    }
    return Ranking;
}());

var Token = (function () {
    function Token() {
    }
    return Token;
}());

var Match = (function () {
    function Match() {
        this.gameName = "";
        this.players = new Array();
        this.players[0] = new Player("", 0);
        this.players[1] = new Player("", 0);
    }
    return Match;
}());

var Player = (function () {
    function Player(username, score) {
        this.username = username;
        this.score = score;
    }
    return Player;
}());

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>All games</h2>\r\n  <table class=\"table table-bordered table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th class=\"text-center\">Game</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let g of games\">\r\n      <td><a [routerLink]=\"['/games', g.name, 'rankings']\">{{g.name}}</a></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_service__ = __webpack_require__("../../../../../src/app/game/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = (function () {
    function GameComponent(authenticationService, gameService, route, router) {
        this.authenticationService = authenticationService;
        this.gameService = gameService;
        this.route = route;
        this.router = router;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.games = data.games;
        }, function (err) {
            console.log("Could not retrieve games data.");
            _this.router.navigateByUrl('error');
        });
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'game-component',
        template: __webpack_require__("../../../../../src/app/game/game.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__game_service__["a" /* GameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], GameComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameResolve = (function () {
    function GameResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    GameResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getGames().then(function (res) {
            if (res) {
                _this.games = res;
                return _this.games;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    GameResolve.prototype.getGames = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/games').toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    GameResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return GameResolve;
}());
GameResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], GameResolve);

var _a, _b;
//# sourceMappingURL=game.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameService = (function () {
    function GameService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    GameService.prototype.recalculate = function (gameName, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.authenticationService.getToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            params: params
        });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/recalculate', {}, options).toPromise()
            .then(function (response) { return Promise.resolve(response.json()); }, function (err) { return Promise.reject(null); })
            .catch(this.handleError);
    };
    GameService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return GameService;
}());
GameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], GameService);

var _a, _b;
//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../src/app/game/match/match-details.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>{{gameName}} match {{matchId}}</h2>\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" #matchForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" [(ngModel)]=\"match.matchId\" name=\"matchId\" hidden required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"match.gameName\" name=\"gameName\" hidden required>\r\n    </div>\r\n    <div>\r\n      <label for=\"dateTime\">Match time</label>\r\n      <input type=\"dateTime\" class=\"form-control\" id=\"datetime\" [(ngModel)]=\"match.dateTime\" name=\"dateTime\" [readonly]=true required>\r\n    </div>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"text-center\">Player</th>\r\n        <th class=\"text-center\">Score</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let p of match.players; let i = index\" [attr.data-index]=\"i\">\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" id=\"playerName_{{i}}\" [(ngModel)]=\"match.players[i].username\" name=\"playerName_{{i}}\" required>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" id=\"playerScore_{{i}}\" [(ngModel)]=\"match.players[i].score\" name=\"playerScore_{{i}}\" required>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!matchForm.form.valid\">Submit</button>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/match/match-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_service__ = __webpack_require__("../../../../../src/app/game/match/match.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchDetailsComponent = (function () {
    function MatchDetailsComponent(authenticationService, matchService, route, router) {
        this.authenticationService = authenticationService;
        this.matchService = matchService;
        this.route = route;
        this.router = router;
    }
    MatchDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.match = data.match;
            _this.token = data.token.token;
        }, function (err) {
            console.log("Could not retrieve rankings data.");
            _this.router.navigateByUrl('error');
        });
        this.route.params.subscribe(function (params) {
            _this.gameName = params['gameName'];
            _this.matchId = params['matchId'];
        });
        console.log(this.match);
    };
    MatchDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        //Convert string inputs of scores to numbers
        for (var i = 0; i < this.match.players.length; i++) {
            this.match.players[i].score = Number(this.match.players[i].score);
        }
        this.matchService.updateMatch(this.gameName, this.matchId, this.match, this.token).then(function (response) { return _this.redirectToGameMatches(); }, function (err) { return console.log("err"); });
    };
    MatchDetailsComponent.prototype.redirectToGameMatches = function () {
        this.router.navigateByUrl('games/' + this.gameName + '/matches');
    };
    return MatchDetailsComponent;
}());
MatchDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-details-component',
        template: __webpack_require__("../../../../../src/app/game/match/match-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__match_service__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], MatchDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=match-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/match/match-details.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailsResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchDetailsResolve = (function () {
    function MatchDetailsResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    MatchDetailsResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getMatch(route.params.gameName, route.params.matchId).then(function (res) {
            if (res) {
                _this.match = res;
                return _this.match;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    MatchDetailsResolve.prototype.getMatch = function (gameName, matchId) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/matches/' + matchId).toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    MatchDetailsResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return MatchDetailsResolve;
}());
MatchDetailsResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], MatchDetailsResolve);

var _a, _b;
//# sourceMappingURL=match-details.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/game/match/match-list.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>{{gameName}} matches</h2>\r\n  <table class=\"table table-bordered table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th class=\"text-centger\">DateTime</th>\r\n      <th class=\"text-center\">Players</th>\r\n      <th class=\"text-center\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let m of matches\">\r\n      <td>{{m.dateTime | amDateFormat: 'YYYY-MM-DD HH:mm'}}</td>\r\n      <td>\r\n        <p *ngFor=\"let p of m.players\">\r\n          <a [routerLink]=\"['/users', p.username]\">{{p.username}}</a> - {{p.score}}\r\n        </p>\r\n      </td>\r\n      <td>\r\n        <p><a [routerLink]=\"['/games', gameName, 'matches', m.matchId]\">Modify</a></p>\r\n        <p><a href=\"javascript:void(0)\" (click)=\"deleteMatch(m.matchId)\">Delete</a></p>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <a href=\"javascript:void(0)\" (click)=\"recalculate()\">Recalculate rankings</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/match/match-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_game_game_service__ = __webpack_require__("../../../../../src/app/game/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__match_service__ = __webpack_require__("../../../../../src/app/game/match/match.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchListComponent = (function () {
    function MatchListComponent(authenticationService, gameService, matchService, route, router) {
        this.authenticationService = authenticationService;
        this.gameService = gameService;
        this.matchService = matchService;
        this.route = route;
        this.router = router;
    }
    MatchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.matches = data.matches;
            _this.token = data.token.token;
        }, function (err) {
            console.log("Could not retrieve rankings data.");
            _this.router.navigateByUrl('error');
        });
        this.route.params.subscribe(function (params) {
            _this.gameName = params['gameName'];
        });
    };
    MatchListComponent.prototype.recalculate = function () {
        var _this = this;
        this.gameService.recalculate(this.gameName, this.token).then(function (response) { return _this.redirectToGameRankings(); }, function (err) { return console.log("err"); });
    };
    MatchListComponent.prototype.deleteMatch = function (matchId) {
        var _this = this;
        this.matchService.deleteMatch(this.gameName, matchId, this.token).then(function (response) { return _this.redirectToGameRankings(); }, function (err) { return console.log("err"); });
    };
    MatchListComponent.prototype.redirectToGameRankings = function () {
        this.router.navigateByUrl('games/' + this.gameName + '/rankings');
    };
    return MatchListComponent;
}());
MatchListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-list-component',
        template: __webpack_require__("../../../../../src/app/game/match/match-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_game_game_service__["a" /* GameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__match_service__["a" /* MatchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], MatchListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=match-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/match/match-list.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchListResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchListResolve = (function () {
    function MatchListResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    MatchListResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getMatches(route.params.gameName).then(function (res) {
            if (res) {
                _this.matches = res;
                return _this.matches;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    MatchListResolve.prototype.getMatches = function (gameName) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/matches').toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    MatchListResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return MatchListResolve;
}());
MatchListResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], MatchListResolve);

var _a, _b;
//# sourceMappingURL=match-list.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/game/match/match.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>{{gameName}} - Match results</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #matchForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"match.gameName\" name=\"gameName\" hidden required>\r\n    </div>\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"text-center\">Player</th>\r\n        <th class=\"text-center\">Score</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let p of match.players; let i = index\" [attr.data-index]=\"i\">\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" id=\"playerName_{{i}}\" [(ngModel)]=\"match.players[i].username\" name=\"playerName_{{i}}\" required>\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" id=\"playerScore_{{i}}\" [(ngModel)]=\"match.players[i].score\" name=\"playerScore_{{i}}\" required>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!matchForm.form.valid\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/match/match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_service__ = __webpack_require__("../../../../../src/app/game/match/match.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__definitions__ = __webpack_require__("../../../../../src/app/definitions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchComponent = (function () {
    function MatchComponent(authenticationService, matchService, route, router) {
        this.authenticationService = authenticationService;
        this.matchService = matchService;
        this.route = route;
        this.router = router;
        this.gameName = "";
    }
    MatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.token = data.token.token;
        }, function (err) {
            console.log("Could not retrieve rankings data.");
            _this.router.navigateByUrl('error');
        });
        this.route.params.subscribe(function (params) {
            _this.gameName = params['gameName'];
            _this.match = new __WEBPACK_IMPORTED_MODULE_4__definitions__["a" /* Match */]();
            _this.match.gameName = _this.gameName;
        });
    };
    MatchComponent.prototype.onSubmit = function () {
        var _this = this;
        //Convert string inputs of scores to numbers
        for (var i = 0; i < this.match.players.length; i++) {
            this.match.players[i].score = Number(this.match.players[i].score);
        }
        this.matchService.addMatch(this.match, this.token).then(function (response) { return _this.redirectToGameRankings(); }, function (err) { return console.log("err"); });
    };
    MatchComponent.prototype.redirectToGameRankings = function () {
        this.router.navigateByUrl('games/' + this.gameName + '/rankings');
    };
    return MatchComponent;
}());
MatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'match-component',
        template: __webpack_require__("../../../../../src/app/game/match/match.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__match_service__["a" /* MatchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__match_service__["a" /* MatchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], MatchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=match.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/match/match.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchService = (function () {
    function MatchService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    MatchService.prototype.addMatch = function (match, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.authenticationService.getToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            params: params
        });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + match.gameName, JSON.stringify(match), options).toPromise()
            .then(function (response) { return Promise.resolve(response.json()); }, function (err) { return Promise.reject(null); })
            .catch(this.handleError);
    };
    MatchService.prototype.updateMatch = function (gameName, matchId, match, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.authenticationService.getToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            params: params
        });
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/matches/' + matchId, match, options).toPromise()
            .then(function (response) { return Promise.resolve(response.json()); }, function (err) { return Promise.reject(null); })
            .catch(this.handleError);
    };
    MatchService.prototype.deleteMatch = function (gameName, matchId, token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': this.authenticationService.getToken()
        });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: headers,
            params: params
        });
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/matches/' + matchId, options).toPromise()
            .then(function (response) { return Promise.resolve(response.json()); }, function (err) { return Promise.reject(null); })
            .catch(this.handleError);
    };
    MatchService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return MatchService;
}());
MatchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], MatchService);

var _a, _b;
//# sourceMappingURL=match.service.js.map

/***/ }),

/***/ "../../../../../src/app/game/rankings/game-rankings.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>{{gameName}}</h2>\r\n  <table class=\"table table-bordered table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th class=\"text-center\">Username</th>\r\n      <th class=\"text-center\">Ranking</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let r of rankings\">\r\n      <td><a [routerLink]=\"['/users', r.username]\">{{r.username}}</a></td>\r\n      <td>{{r.value | round}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n  <div>\r\n    <p><a [routerLink]=\"['/games', gameName, 'match']\">Add match result</a></p>\r\n    <p><a [routerLink]=\"['/games', gameName, 'matches']\">Matches history</a></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/rankings/game-rankings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_game_game_service__ = __webpack_require__("../../../../../src/app/game/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRankingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameRankingsComponent = (function () {
    function GameRankingsComponent(authenticationService, gameService, route, router) {
        this.authenticationService = authenticationService;
        this.gameService = gameService;
        this.route = route;
        this.router = router;
    }
    GameRankingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.rankings = data.rankings;
        }, function (err) {
            console.log("Could not retrieve rankings data.");
            _this.router.navigateByUrl('error');
        });
        this.route.params.subscribe(function (params) {
            _this.gameName = params['gameName'];
        });
    };
    return GameRankingsComponent;
}());
GameRankingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'game-rankings-component',
        template: __webpack_require__("../../../../../src/app/game/rankings/game-rankings.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_game_game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_game_game_service__["a" /* GameService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], GameRankingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=game-rankings.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/rankings/game-rankings.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRankingsResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameRankingsResolve = (function () {
    function GameRankingsResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    GameRankingsResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getRankings(route.params.gameName).then(function (res) {
            if (res) {
                _this.rankings = res;
                return _this.rankings;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    GameRankingsResolve.prototype.getRankings = function (gameName) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/games/' + gameName + '/rankings').toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    GameRankingsResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return GameRankingsResolve;
}());
GameRankingsResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], GameRankingsResolve);

var _a, _b;
//# sourceMappingURL=game-rankings.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>HOME PAGE</h1>\r\n\r\n<div>Not much to see here.</div>"

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>{{user.username}}</h2>\r\n  <table class=\"table table-bordered table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th class=\"text-center\">Game</th>\r\n      <th class=\"text-center\">Ranking</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let r of user.rankings\">\r\n      <td><a [routerLink]=\"['/games', r.gameName, 'rankings']\">{{r.gameName}}</a></td>\r\n      <td>{{r.value | round}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = (function () {
    function UserDetailsComponent(authenticationService, userService, route, router) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            console.log("Could not retrieve user data.");
            _this.router.navigateByUrl('error');
        });
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-details-component',
        template: __webpack_require__("../../../../../src/app/user/details/user-details.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UserDetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/details/user-details.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailsResolve = (function () {
    function UserDetailsResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    UserDetailsResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getUsers(route.params.username).then(function (res) {
            if (res) {
                _this.user = res;
                return _this.user;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    UserDetailsResolve.prototype.getUsers = function (username) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/users/' + username).toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    UserDetailsResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return UserDetailsResolve;
}());
UserDetailsResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserDetailsResolve);

var _a, _b;
//# sourceMappingURL=user-details.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<noscript><h2 style=\"color: #ff0000\">Seems your browser doesn't support Javascript!\r\n    Please enable Javascript and reload this page!</h2></noscript>\r\n<div id=\"main-content\" class=\"container\">\r\n  <h2>All users</h2>\r\n  <table class=\"table table-bordered table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th class=\"text-center\">Username</th>\r\n      <th class=\"text-center\">Top 3 rankings</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let u of users\">\r\n      <td><a [routerLink]=\"['/users', u.username]\">{{u.username}}</a></td>\r\n      <td>\r\n        <p *ngFor=\"let r of u.rankings | slice:0:3\">\r\n          <a [routerLink]=\"['/games', r.gameName, 'rankings']\">{{r.gameName}}</a> - {{r.value | round}}\r\n        </p>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(authenticationService, userService, route, router) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.users = data.users;
        }, function (err) {
            console.log("Could not retrieve users data.");
            _this.router.navigateByUrl('error');
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-component',
        template: __webpack_require__("../../../../../src/app/user/user.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_user_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserResolve = (function () {
    function UserResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    UserResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.getUsers().then(function (res) {
            if (res) {
                _this.users = res;
                return _this.users;
            }
            else {
                _this.router.navigateByUrl('error');
                return null;
            }
        })
            .catch(function (err) {
            _this.router.navigateByUrl('error');
            return null;
        });
    };
    UserResolve.prototype.getUsers = function () {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASE_URL + '/api/users').toPromise()
            .then(function (response) { return response.json(); }, function (err) { return null; })
            .catch(this.handleError);
    };
    UserResolve.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return UserResolve;
}());
UserResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserResolve);

var _a, _b;
//# sourceMappingURL=user.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    return RoundPipe;
}());
RoundPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'round' })
], RoundPipe);

//# sourceMappingURL=util.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASE_URL: "http://192.168.99.100:8443"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map