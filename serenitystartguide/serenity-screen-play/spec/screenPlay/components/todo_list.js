"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
var protractor_1 = require("protractor");
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.What_Needs_To_Be_Done = screenplay_protractor_1.Target.the('"What needs to be done?" input box')
        .located(protractor_1.by.id('new-todo'));
    TodoList.Items = screenplay_protractor_1.Target.the('List of Items').located(protractor_1.by.repeater('todo in todos'));
    TodoList.Items_Displayed = screenplay_protractor_1.Text.ofAll(TodoList.Items);
    return TodoList;
}());
exports.TodoList = TodoList;
