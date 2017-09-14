import { Actor } from 'serenity-js/lib/screenplay';
import { Start } from '../../spec/screenplay/tasks/start';
import { listOf } from '../../spec/text';
import {AddATodoItem} from "../../spec/screenPlay/tasks/add_a_todo_item";
import {BrowseTheWeb} from "serenity-js/lib/serenity-protractor";
import {protractor} from "protractor";
import {TodoList} from "../../spec/screenPlay/components/todo_list";
import {expect} from "../../spec/expect";


export = function todoUserSteps() {
let actor: Actor;
    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName: string, items: string) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));

        return actor.attemptsTo(
            Start.withATodoListContaining(listOf(items))
        );


    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName: string) {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        )
    });

    this.Then(/^.* todo list should contain (.*?)$/, function (items: string) {
        return expect(actor.toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf(items));
    });

    //
    // this.Then(/^I should see the (.*?)$/, function(itemstext:string,callback)  {
    //     callback;
    // });
};