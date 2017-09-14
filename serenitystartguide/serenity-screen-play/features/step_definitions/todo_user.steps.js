"use strict";
var screenplay_1 = require("serenity-js/lib/screenplay");
var start_1 = require("../../spec/screenplay/tasks/start");
var text_1 = require("../../spec/text");
var add_a_todo_item_1 = require("../../spec/screenPlay/tasks/add_a_todo_item");
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var protractor_1 = require("protractor");
var todo_list_1 = require("../../spec/screenPlay/components/todo_list");
var expect_1 = require("../../spec/expect");
module.exports = function todoUserSteps() {
    var actor;
    this.setDefaultTimeout(30 * 1000); // The todomvc.com website can sometimes be a bit slow to load, so we tell
    // Cucumber to give it up to 30 seconds to get ready.
    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName, items) {
        actor = screenplay_1.Actor.named(actorName).whoCan(serenity_protractor_1.BrowseTheWeb.using(protractor_1.protractor.browser));
        return actor.attemptsTo(start_1.Start.withATodoListContaining(text_1.listOf(items)));
    });
    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName) {
        return actor.attemptsTo(add_a_todo_item_1.AddATodoItem.called(itemName));
    });
    this.Then(/^.* todo list should contain (.*?)$/, function (items) {
        return expect_1.expect(actor.toSee(todo_list_1.TodoList.Items_Displayed)).eventually.deep.equal(text_1.listOf(items));
    });
    //
    // this.Then(/^I should see the (.*?)$/, function(itemstext:string,callback)  {
    //     callback;
    // });
};
