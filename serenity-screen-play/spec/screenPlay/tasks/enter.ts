
import {PerformsTasks,Task} from 'serenity-js/lib/screenplay';
import {TodoList} from "../components/todo_list";
import {Enter} from "serenity-js/lib/serenity-protractor";
export class EnterValues implements Task {

    static called(Title:string,FirstName:string,LastName:string){
        return new EnterValues(Title,FirstName,LastName);
    }

    performAs(actor: PerformsTasks){
        return actor.attemptsTo(
            Enter.theValue(this.Title)
                .into(TodoList.enter_title_to_register),
            Enter.theValue(this.FirstName)
                .into(TodoList.enter_firstName_to_register),
            Enter.theValue(this.LastName)
                .into(TodoList.enter_lastName_to_register),
        );
    }
    constructor(private Title:string,private FirstName:string,private LastName:string){

    }
}