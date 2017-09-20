import {by} from "protractor";
import {Target} from "serenity-js/lib/serenity-protractor";
import {Text} from "../../text";
import {Question} from "@serenity-js/core/lib/screenplay";

export class TodoList{
    static enter_user_id = Target.the('user id')
        .located(by.xpath('//*[@id="frmLogin:strCustomerLogin_userID"]'));


    static enter_password = Target.the('password')
        .located(by.xpath('//*[@id="frmLogin:strCustomerLogin_pwd"]'));

    static click_on_continue = Target.the('login')
        .located(by.xpath('//*[@id="frmLogin:btnLogin2"]'));

    static error_message_displayed = Target.the('error text')
        .located(by.xpath('//*[@id="frmLogin"]/div/div[1]'));


    static clicl_on_register = Target.the('register button')
        .located(by.xpath('//*[@title ="register online"]'));

    static enter_title_to_register = Target.the('Title field')
        .located(by.xpath('//*[@id="frm_personalRegistration:txttitle"]'));
    static enter_firstName_to_register= Target.the('FirstName field')
        .located(by.css('[name="frm_personalRegistration:txtFirstName"]'));

    static enter_lastName_to_register= Target.the('LastName field')
        .located(by.css('[name="frm_personalRegistration:txtsurname"]'));


}
