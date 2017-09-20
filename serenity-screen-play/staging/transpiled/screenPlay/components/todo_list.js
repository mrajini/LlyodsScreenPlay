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
TodoList.clicl_on_register = serenity_protractor_1.Target.the('register button')
    .located(protractor_1.by.xpath('//*[@title ="register online"]'));
TodoList.enter_title_to_register = serenity_protractor_1.Target.the('Title field')
    .located(protractor_1.by.xpath('//*[@id="frm_personalRegistration:txttitle"]'));
TodoList.enter_firstName_to_register = serenity_protractor_1.Target.the('FirstName field')
    .located(protractor_1.by.css('[name="frm_personalRegistration:txtFirstName"]'));
TodoList.enter_lastName_to_register = serenity_protractor_1.Target.the('LastName field')
    .located(protractor_1.by.css('[name="frm_personalRegistration:txtsurname"]'));
exports.TodoList = TodoList;
//# sourceMappingURL=todo_list.js.map