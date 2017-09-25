import {Task} from 'serenity-js/lib/screenplay';
import {TodoList} from "../components/todo_list";
import {protractor} from "protractor";
import {Click, DoubleClick, Enter} from "serenity-js/lib/serenity-protractor";
import {PerformsTasks} from "@serenity-js/core/lib/screenplay";



export class SelectDates implements Task {
    static called(Date: string, Month: string, Year: string) {
        return new SelectDates(Date, Month, Year);
    }

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            DoubleClick.on(TodoList.enter_date_to_register),
            Enter.theValue(this.Date)
                .into(TodoList.enter_date_to_register)
                .thenHit(protractor.Key.TAB),
            Click.on(TodoList.enter_month_to_register),
            Enter.theValue(this.Month)
                .into(TodoList.enter_month_to_register)
                .thenHit(protractor.Key.TAB),
            Click.on(TodoList.enter_year_to_register),
            Enter.theValue(this.Year)
                .into(TodoList.enter_year_to_register)
                 .thenHit(protractor.Key.TAB),
        );


    }

    constructor(private Date: string, private Month: string, private Year: string) {

    }

}
export class SelectAccountType implements Task{
    static selectAccountType(AccountType:string){
        return new SelectAccountType(AccountType);
    }
    performAs(actor:PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.AccountType)
                .into(TodoList.select_accountType_to_register)
                  // .thenHit(protractor.Key.TAB),

        )
    }
    constructor(private AccountType:string){

    }

}