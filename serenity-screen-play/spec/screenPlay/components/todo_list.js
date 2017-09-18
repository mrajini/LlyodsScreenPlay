"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var TodoList = (function () {
    function TodoList() {
    }
    return TodoList;
}());
TodoList.enter_user_id = serenity_protractor_1.Target.the('user id')
    .located(protractor_1.by.xpath('//*[@id="frmLogin:strCustomerLogin_userID"]'));
TodoList.enter_password = serenity_protractor_1.Target.the('password')
    .located(protractor_1.by.xpath('//*[@id="frmLogin:strCustomerLogin_pwd"]'));
TodoList.click_on_continue = serenity_protractor_1.Target.the('login')
    .located(protractor_1.by.xpath('//*[@id="frmLogin:btnLogin2"]'));
TodoList.error_message_displayed = serenity_protractor_1.Target.the('error text')
    .located(protractor_1.by.xpath('//*[@id="frmLogin"]/div/div[1]'));
TodoList.Items = serenity_protractor_1.Target.the('List of Items').located(protractor_1.by.repeater('todo in todos'));
exports.TodoList = TodoList;
