"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_a_todo_item_1 = require("./add_a_todo_item");
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var Start = (function () {
    function Start(items) {
        // constructor assigning the list of items
        this.items = items;
    } // to a private field
    Start.withATodoListContaining = function (items) {
        return new Start(items);
    };
    Start.prototype.performAs = function (actor) {
        return actor.attemptsTo.apply(actor, [serenity_protractor_1.Open.browserOn('/examples/angularjs/')].concat(this.addAll(this.items) // delegates the work to lower-level tasks
        // todo: add each item to the Todo List
        ));
    };
    Start.prototype.addAll = function (items) {
        return items.map(function (item) { return add_a_todo_item_1.AddATodoItem.called(item); }); // into a list of Tasks
    };
    return Start;
}());
exports.Start = Start;
