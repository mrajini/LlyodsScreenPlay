import {Target} from "serenity-js/lib/serenity-protractor";
import {by} from "protractor";

export class TodoList{

    //Locators of Login Page********************

    static enter_user_id = Target.the('user id')
        .located(by.xpath('//*[@id="frmLogin:strCustomerLogin_userID"]'));


    static enter_password = Target.the('password')
        .located(by.xpath('//*[@id="frmLogin:strCustomerLogin_pwd"]'));

    static click_on_continue = Target.the('login')
        .located(by.xpath('//*[@id="frmLogin:btnLogin2"]'));

    static error_message_displayed_for_login= Target.the('error text')
        .located(by.xpath('//*[@id="frmLogin"]/div/div[1]'));


    //Locators of Registration page***************


    static clicl_on_register = Target.the('register button')
        .located(by.xpath('//*[@title ="register online"]'));

    static enter_title_to_register = Target.the('Title field')
        .located(by.xpath('//*[@id="frm_personalRegistration:txttitle"]'));

    static enter_firstName_to_register= Target.the('FirstName field')
        .located(by.css('[name="frm_personalRegistration:txtFirstName"]'));

    static enter_lastName_to_register= Target.the('LastName field')
        .located(by.css('[name="frm_personalRegistration:txtsurname"]'));

    static enter_date_to_register= Target.the('Date field')
        .located(by.css('.day.slctDay'));

    static enter_month_to_register= Target.the('Month field')
        .located(by.css('.month.slctMonth'));

    static enter_year_to_register= Target.the('Year field')
        .located(by.css('.year.slctYear'));

    static enter_postCode_to_register= Target.the('Post code field')
        .located(by.css('.postcode.linkedTextField'));

    static select_accountType_to_register= Target.the('Account type field')
        .located(by.css('[name="frm_personalRegistration:slctaccountType"]'));

    static enter_sortCode_to_register= Target.the('sortcode field')
       .located(by.css('[name="frm_personalRegistration:strSortCode"]'));

    static enter_accountNumber_to_register= Target.the('Account number')
        .located(by.css('[name="frm_personalRegistration:strAccountNumber"]'));

    static click_on_continue_to_register= Target.the('continue btn')
        .located(by.css('.submitAction.m-action-button.primary-btn'));

    static error_message_for_registration= Target.the('error message for registration')
        .located(by.css('.formSubmitError'));

    static credit_card_number= Target.the('card number')
        .located(by.css('[name="frm_personalRegistration:creditCard"]'));



}

