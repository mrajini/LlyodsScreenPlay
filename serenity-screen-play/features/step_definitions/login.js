"use strict";
var start_1 = require("../../spec/screenPlay/tasks/start");
var screenplay_1 = require("@serenity-js/core/lib/screenplay");
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var protractor_1 = require("protractor");
var todo_list_1 = require("../../spec/screenPlay/components/todo_list");
var expect_1 = require("../../spec/expect");
var todo_List_items_1 = require("../../staging/transpiled/screenPlay/questions/todo_List_items");
module.exports = function tosignUpSteps() {
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.get('/non-angular-login-page.html');
    var actor;
    this.setDefaultTimeout(30 * 1000);
    this.Given(/^that (.*) want to login to the llyods bank$/, function (actorName) {
        actor = screenplay_1.Actor.named(actorName).whoCan(serenity_protractor_1.BrowseTheWeb.using(protractor_1.protractor.browser));
        return actor.attemptsTo(start_1.Start.navigateToPage());
    });
    this.When(/^he enters his user id as (.*)$/, function (userInfo) {
        return actor.attemptsTo(serenity_protractor_1.Enter.theValue(userInfo).into(todo_list_1.TodoList.enter_user_id));
    });
    this.When(/^he enters his password as (.*)$/, function (passInfo) {
        return actor.attemptsTo(serenity_protractor_1.Enter.theValue(passInfo).into(todo_list_1.TodoList.enter_password));
    });
    this.When(/^he clickes the login button$/, function () {
        return actor.attemptsTo(serenity_protractor_1.Click.on(todo_list_1.TodoList.click_on_continue));
    });
    this.Then(/^he should not get successful login message containing that (.*)$/, function (items) {
        return actor.attemptsTo(
        // See.if(TodoListItems.Displayed, actual => expect(actual).to.eventually.empty(items)),
        screenplay_1.See.if(todo_List_items_1.TodoListItems.Displayed, function (actual) { return expect_1.expect(actual).to.eventually.not.equal(items); }));
    });
    this.Then(/^he should get error message containing that (.*)$/, function (items) {
        return actor.attemptsTo(
        // Ensure.errorMessagecontains(items),
        screenplay_1.See.if(todo_List_items_1.TodoListItems.Displayed, function (actual) { return expect_1.expect(actual).to.eventually.contain(items); }));
        // return actor.toSee(Text.(TextOf(toString(TodoList.error_message_displayed).eventually.contain(errorMessage))
        //  Ensure.errorMessagecontains(items))
    });
};
// this.Then(/^(.*?) should be recorded in his list$/, function(item: string) {
//
//     return actor.attemptsTo(
//         See.if(TodoListItems.Displayed, actual => expect(actual).to.eventually.contain(item)),
//     );
// });
