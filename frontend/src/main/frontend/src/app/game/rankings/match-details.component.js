"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MatchDetailsComponent = (function () {
    function MatchDetailsComponent(authenticationService, gameService, route, router) {
        this.authenticationService = authenticationService;
        this.gameService = gameService;
        this.route = route;
        this.router = router;
    }
    MatchDetailsComponent.prototype.ngOnInit = function () {
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
    MatchDetailsComponent.prototype.recalculate = function () {
        var _this = this;
        this.gameService.recalculate(this.gameName, this.token).then(function (response) { return _this.redirectToGameRankings(); }, function (err) { return console.log("err"); });
    };
    MatchDetailsComponent.prototype.deleteMatch = function (matchId) {
        var _this = this;
        this.gameService.deleteMatch(this.gameName, matchId, this.token).then(function (response) { return _this.redirectToGameRankings(); }, function (err) { return console.log("err"); });
    };
    MatchDetailsComponent.prototype.redirectToGameRankings = function () {
        this.router.navigateByUrl('games/' + this.gameName + '/rankings');
    };
    return MatchDetailsComponent;
}());
MatchDetailsComponent = __decorate([
    core_1.Component({
        selector: 'match-details-component',
        templateUrl: 'match-details.component.html'
    })
], MatchDetailsComponent);
exports.MatchDetailsComponent = MatchDetailsComponent;
