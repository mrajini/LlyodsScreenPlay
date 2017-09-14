import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import {AddATodoItem} from "./add_a_todo_item";
import {Open} from "serenity-js/lib/serenity-protractor";

export class Start implements Task {

    static withATodoListContaining(items: string[]) {       // static method to improve the readability
        return new Start(items);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {    // required by the Task interface
        return actor.attemptsTo(
            Open.browserOn('/examples/angularjs/'),
            ... this.addAll(this.items)// delegates the work to lower-level tasks
            // todo: add each item to the Todo List
        );
    }

    constructor(private items: string[]) {
        // constructor assigning the list of items

    }// to a private field
    private addAll(items: string[]): Task[] {                   // transforms a list of item names
        return items.map(item => AddATodoItem.called(item));    // into a list of Tasks
    }
}
