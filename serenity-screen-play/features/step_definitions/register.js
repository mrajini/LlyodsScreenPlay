"use strict";
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var todo_list_1 = require("../../spec/screenPlay/components/todo_list");
module.exports = function toregisterStepDefs() {
    // browser.waitForAngularEnabled(false);
    // browser.get('/non-angular-login-page.html');
    var actor;
    this.setDefaultTimeout(30 * 1000);
    this.Given(/^that (.*) want to register on Llyod bank$/, function (actorName) {
        return actor.attemptsTo(
        // Start.navigateToPage(),
        serenity_protractor_1.Click.on(todo_list_1.TodoList.clicl_on_register));
    });
    this.When(/^he enters (.*), (.*), (.*)$/, function (arg1, arg2, arg3, callback) {
        callback(null, 'pending');
    });
    this.When(/^gives his Date of birth (.*), (.*), (.*)$/, function (arg1, arg2, arg3, callback) {
        callback(null, 'pending');
    });
    this.When(/^he provides his (.*)$/, function (arg2, callback) {
        callback(null, 'pending');
    });
    this.When(/^he provides his account details as (.*),(.*)$/, function (sortCode, account, callback) {
        callback(null, 'pending');
    });
    this.When(/^he clicks on Continue to move to Login tab$/, function (callback) {
        callback(null, 'pending');
    });
    this.Then(/^he should get see an error message containing that (.*)$/, function (callback) {
        callback(null, 'pending');
    });
};
