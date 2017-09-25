"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_list_1 = require("../components/todo_list");
var protractor_1 = require("protractor");
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var SelectDates = (function () {
    function SelectDates(Date, Month, Year) {
        this.Date = Date;
        this.Month = Month;
        this.Year = Year;
    }
    SelectDates.called = function (Date, Month, Year) {
        return new SelectDates(Date, Month, Year);
    };
    SelectDates.prototype.performAs = function (actor) {
        return actor.attemptsTo(serenity_protractor_1.DoubleClick.on(todo_list_1.TodoList.enter_date_to_register), serenity_protractor_1.Enter.theValue(this.Date)
            .into(todo_list_1.TodoList.enter_date_to_register)
            .thenHit(protractor_1.protractor.Key.TAB), serenity_protractor_1.Click.on(todo_list_1.TodoList.enter_month_to_register), serenity_protractor_1.Enter.theValue(this.Month)
            .into(todo_list_1.TodoList.enter_month_to_register)
            .thenHit(protractor_1.protractor.Key.TAB), serenity_protractor_1.Click.on(todo_list_1.TodoList.enter_year_to_register), serenity_protractor_1.Enter.theValue(this.Year)
            .into(todo_list_1.TodoList.enter_year_to_register)
            .thenHit(protractor_1.protractor.Key.TAB));
    };
    return SelectDates;
}());
exports.SelectDates = SelectDates;
var SelectAccountType = (function () {
    function SelectAccountType(AccountType) {
        this.AccountType = AccountType;
    }
    SelectAccountType.selectAccountType = function (AccountType) {
        return new SelectAccountType(AccountType);
    };
    SelectAccountType.prototype.performAs = function (actor) {
        return actor.attemptsTo(serenity_protractor_1.Enter.theValue(this.AccountType)
            .into(todo_list_1.TodoList.select_accountType_to_register)
        // .thenHit(protractor.Key.TAB),
        );
    };
    return SelectAccountType;
}());
exports.SelectAccountType = SelectAccountType;
