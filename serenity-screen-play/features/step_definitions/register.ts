   import {browser, protractor} from "protractor";
   import {Actor} from "@serenity-js/core/lib/screenplay";
   import {Start} from "../../spec/screenPlay/tasks/start";
   import {BrowseTheWeb, Click} from "serenity-js/lib/serenity-protractor";
   import {TodoList} from "../../spec/screenPlay/components/todo_list";
   import {EnterValues} from "../../spec/screenPlay/tasks/enter";
   export = function toregisterStepDefs() {
        // browser.waitForAngularEnabled(false);
        // browser.get('/non-angular-login-page.html');

       let actor: Actor;
       this.setDefaultTimeout(30 * 1000);
       this.Given(/^that (.*) want to register on Llyod bank$/, function (actorName: string,) {
           actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
           return actor.attemptsTo(
               Start.navigateToPage(),
               Click.on(TodoList.clicl_on_register),
           );

       });


       this.When(/^he enters (.*), (.*), (.*)$/, function (Title:string, FirstName:string, LastName:string) {
           return actor.attemptsTo(
               new EnterValues(Title,FirstName,LastName),
           );
       });


       this.When(/^gives his Date of birth (.*), (.*), (.*)$/, function (arg1, arg2, arg3, callback) {
           callback(null, 'pending');
       });


       this.When(/^he provides his (.*)$/, function (arg2, callback) {
           callback(null, 'pending');
       });


       this.When(/^he provides his account details as (.*),(.*)$/, function (sortCode: string, account: string, callback) {
           callback(null, 'pending');
       });


       this.When(/^he clicks on Continue to move to Login tab$/, function (callback) {
           callback(null, 'pending');
       });


       this.Then(/^he should get see an error message containing that (.*)$/, function (callback) {
           callback(null, 'pending');
       });


   }