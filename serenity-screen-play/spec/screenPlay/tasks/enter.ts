
import {PerformsTasks,Task} from 'serenity-js/lib/screenplay';
import {TodoList} from "../components/todo_list";
import {Click, DoubleClick, Enter} from "serenity-js/lib/serenity-protractor";
import {browser, protractor} from "protractor";
import {SelectAccountType} from "./select";


export class EnterValues implements Task {

    static called(Title: string, FirstName: string, LastName: string) {
        return new EnterValues(Title, FirstName, LastName);
    }

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            Enter.theValue(this.Title)
                .into(TodoList.enter_title_to_register)
                .thenHit(protractor.Key.TAB),
            Enter.theValue(this.FirstName)
                .into(TodoList.enter_firstName_to_register),
            Enter.theValue(this.LastName)
                .into(TodoList.enter_lastName_to_register)
                .thenHit(protractor.Key.TAB)
        );
    }

    constructor(private Title: string, private FirstName: string, private LastName: string) {

    }

}
  export class ProvidePostCode implements Task{
    static postCodeValue(PostCode:string){
        return new ProvidePostCode(PostCode);
    }

    performAs(actor:PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.PostCode)
                .into(TodoList.enter_postCode_to_register)
                 // .thenHit(protractor.Key.TAB),


        );

    }
    constructor(private PostCode:string){

    }
}

export class AccountDetails implements Task{

    static account_Details(SortCode:string,AccountNumber:string){
        return new AccountDetails(SortCode,AccountNumber);
    }

    performAs(actor:PerformsTasks){
        return actor.attemptsTo(

            Enter.theValue(this.SortCode)
                .into(TodoList.enter_sortCode_to_register),
            Enter.theValue(this.AccountNumber)
                .into(TodoList.enter_accountNumber_to_register)



        );
    }

    constructor(private SortCode:string,private AccountNumber:string){

         }


}
export function randomString(length_) {

    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (typeof length_ !== "number") {
        length_ = Math.floor(Math.random() * chars.length);
    }
    let str = '';
    for (let i = 0; i < length_; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

let UserId = randomString(10);
export class LogOnPageForm implements Task {

    static fill_log_on_form(UserId: string, Password: string, ConfirmPassword: string, Email: string) {
        return new LogOnPageForm(UserId, Password, ConfirmPassword, Email);
    }

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            Enter.theValue(randomString(10))
                .into(TodoList.user_id),
            Enter.theValue(this.Password)
                .into(TodoList.preferred_password),
            Enter.theValue(this.ConfirmPassword)
                .into(TodoList.confirm_password),
            Enter.theValue(this.Email)
                .into(TodoList.email_id),
            Click.on(TodoList.terms_and_conditions)
        )

    }

    constructor(private UserId: string, private Password: string, private ConfirmPassword: string, private Email: string) {

    }
}



