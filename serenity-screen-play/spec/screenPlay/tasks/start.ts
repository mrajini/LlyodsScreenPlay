import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
// import {Open} from "serenity-js/lib/serenity-protractor";
import {TodoList} from "../components/todo_list";
import {browser} from "protractor";
import { Open, step } from 'serenity-js/lib/screenplay-protractor';

export class Start implements Task{
    static navigateToPage(){
        return new Start();
    }
    @step('{0} Navigates to sign in page')
    performAs(actor: PerformsTasks): PromiseLike<void>{
        return actor.attemptsTo(
            Open.browserOn('/personal/logon/login.jsp'),

    );

    }
}

