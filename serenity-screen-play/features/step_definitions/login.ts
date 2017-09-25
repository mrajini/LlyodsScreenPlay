import {Start} from "../../spec/screenPlay/tasks/start";
import {Actor, See} from "@serenity-js/core/lib/screenplay";
import {BrowseTheWeb, Click, Enter} from "serenity-js/lib/serenity-protractor";
import {browser, protractor} from "protractor";
import {TodoList} from "../../spec/screenPlay/components/todo_list";
import {expect} from "../../spec/expect";
import {TodoListItems} from "../../staging/transpiled/screenPlay/questions/todo_List_items";


export = function tosignUpSteps() {
    // browser.waitForAngularEnabled(false);
    // browser.get('/non-angular-login-page.html');

    let actor:Actor;
    this.setDefaultTimeout(30 * 1000);

    this.Given(/^that (.*) want to login to the llyods bank$/, function (actorName:string) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
        return actor.attemptsTo(
            Start.navigateToPage(),

        );
    });

    this.When(/^he enters his user id as (.*)$/, function (userInfo: string) {
        return actor.attemptsTo(
            Enter.theValue(userInfo).into(TodoList.enter_user_id)
        )

    });
    this.When(/^he enters his password as (.*)$/, function (passInfo: string) {
        return actor.attemptsTo(
            Enter.theValue(passInfo).into(TodoList.enter_password)
        )
    });
    this.When(/^he clickes the login button$/, function(){
        return actor.attemptsTo(
            Click.on(TodoList.click_on_continue)
        )
    });
    this.Then(/^he should not get successful login message containing that (.*)$/, function (items:string) {
        return actor.attemptsTo(
            See.if(TodoListItems.errorDisplayedForLogin, actual => expect(actual).to.eventually.not.equal(items)),
        );
    });

    this.Then(/^he should get error message containing that (.*)$/, function (items:string) {

         return actor.attemptsTo(
             See.if(TodoListItems.errorDisplayedForLogin, actual => expect(actual).to.eventually.contain(items)),
         );

    });


};




