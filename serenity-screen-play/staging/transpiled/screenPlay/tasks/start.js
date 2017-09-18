"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
var Start = (function () {
    function Start() {
    }
    Start.navigateToPage = function () {
        return new Start();
    };
    Start.prototype.performAs = function (actor) {
        return actor.attemptsTo(screenplay_protractor_1.Open.browserOn('/personal/logon/login.jsp'));
    };
    return Start;
}());
__decorate([
    screenplay_protractor_1.step('{0} Navigates to sign in page'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Start.prototype, "performAs", null);
exports.Start = Start;
//# sourceMappingURL=start.js.map