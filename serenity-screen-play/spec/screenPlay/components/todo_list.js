"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serenity_protractor_1 = require("serenity-js/lib/serenity-protractor");
var protractor_1 = require("protractor");
var TodoList = (function () {
    function TodoList() {
    }
    return TodoList;
}());
//Locators of Login Page********************
TodoList.enter_user_id = serenity_protractor_1.Target.the('user id')
    .located(protractor_1.by.xpath('//*[@id="frmLogin:strCustomerLogin_userID"]'));
TodoList.enter_password = serenity_protractor_1.Target.the('password')
    .located(protractor_1.by.xpath('//*[@id="frmLogin:strCustomerLogin_pwd"]'));
TodoList.click_on_continue = serenity_protractor_1.Target.the('login')
    .located(protractor_1.by.xpath('//*[@id="frmLogin:btnLogin2"]'));
TodoList.error_message_displayed_for_login = serenity_protractor_1.Target.the('error text')
    .located(protractor_1.by.xpath('//*[@id="frmLogin"]/div/div[1]'));
//Locators of Registration page***************
TodoList.clicl_on_register = serenity_protractor_1.Target.the('register button')
    .located(protractor_1.by.xpath('//*[@title ="register online"]'));
TodoList.enter_title_to_register = serenity_protractor_1.Target.the('Title field')
    .located(protractor_1.by.xpath('//*[@id="frm_personalRegistration:txttitle"]'));
TodoList.enter_firstName_to_register = serenity_protractor_1.Target.the('FirstName field')
    .located(protractor_1.by.css('[name="frm_personalRegistration:txtFirstName"]'));
TodoList.enter_lastName_to_register = serenity_protractor_1.Target.the('LastName field')
    .located(protractor_1.by.css('[name="frm_personalRegistration:txtsurname"]'));
TodoList.enter_date_to_register = serenity_protractor_1.Target.the('Date field')
    .located(protractor_1.by.css('.day.slctDay'));
TodoList.enter_month_to_register = serenity_protractor_1.Target.the('Month field')
    .located(protractor_1.by.css('.month.slctMonth'));
TodoList.enter_year_to_register = serenity_protractor_1.Target.the('Year field')
    .located(protractor_1.by.css('.year.slctYear'));
TodoList.enter_postCode_to_register = serenity_protractor_1.Target.the('Post code field')
    .located(protractor_1.by.css('.postcode.linkedTextField'));
TodoList.select_accountType_to_register = serenity_protractor_1.Target.the('Account type field')
    .located(protractor_1.by.css('[name="frm_personalRegistration:slctaccountType"]'));
TodoList.enter_sortCode_to_register = serenity_protractor_1.Target.the('sortcode field')
    .located(protractor_1.by.css('[name="frm_personalRegistration:strSortCode"]'));
TodoList.enter_accountNumber_to_register = serenity_protractor_1.Target.the('Account number')
    .located(protractor_1.by.css('[name="frm_personalRegistration:strAccountNumber"]'));
TodoList.click_on_continue_to_register = serenity_protractor_1.Target.the('continue btn')
    .located(protractor_1.by.css('.submitAction.m-action-button.primary-btn'));
TodoList.error_message_for_registration = serenity_protractor_1.Target.the('error message for registration')
    .located(protractor_1.by.css('.formSubmitError'));
TodoList.credit_card_number = serenity_protractor_1.Target.the('card number')
    .located(protractor_1.by.css('[name="frm_personalRegistration:creditCard"]'));
TodoList.reference_loan_number = serenity_protractor_1.Target.the('Reference Number')
    .located(protractor_1.by.css('[name="frm_personalRegistration:strLoanAccountNumber"]'));
TodoList.mortgage_number = serenity_protractor_1.Target.the('Mortgage account number')
    .located(protractor_1.by.css('[name="frm_personalRegistration:strMortgageAccountNumber"]'));
//Locators of Log On Page***************
TodoList.Log_on_page_title = serenity_protractor_1.Target.the('LogOn page Title')
    .located(protractor_1.by.css('.inner>h1'));
TodoList.user_id = serenity_protractor_1.Target.the('User Id')
    .located(protractor_1.by.xpath('//input[@id="frm_Username:txtUsername"]'));
TodoList.preferred_password = serenity_protractor_1.Target.the('Password')
    .located(protractor_1.by.css('[name="frm_Username:txtPassword"]'));
TodoList.confirm_password = serenity_protractor_1.Target.the('Confirm Password')
    .located(protractor_1.by.css('[name="frm_Username:txtPassword1"]'));
TodoList.email_id = serenity_protractor_1.Target.the('mail id')
    .located(protractor_1.by.xpath('//input[@id="frm_Username:txtEmail"]'));
TodoList.terms_and_conditions = serenity_protractor_1.Target.the('checkbox for T&C')
    .located(protractor_1.by.css('[name="frm_Username:bchkbxTmpLegals"]'));
TodoList.security_reasons_text = serenity_protractor_1.Target.the('security reasons message')
    .located(protractor_1.by.css('.panel>h1'));
TodoList.submit_log_on_form = serenity_protractor_1.Target.the('continue btn on log on form')
    .located(protractor_1.by.css('[name="frm_Username:btnContinuebutton"]'));
exports.TodoList = TodoList;
