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


      static Items = Target.the('List of Items').located(by.repeater('todo in todos'));

     // static Displayed: Question<string> = Text.ofAll(Items);
}
