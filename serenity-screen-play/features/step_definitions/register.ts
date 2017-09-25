  import {Actor} from "@serenity-js/core/lib/screenplay";
   import {Start} from "../../spec/screenPlay/tasks/start";
   import {BrowseTheWeb, Click} from "serenity-js/lib/serenity-protractor";
   import {TodoList} from "../../spec/screenPlay/components/todo_list";
   import {AccountDetails, EnterValues, ProvidePostCode} from "../../spec/screenPlay/tasks/enter";
   import {SelectAccountType, SelectDates} from "../../spec/screenPlay/tasks/select";
   import {protractor} from "protractor";
  import {TodoListItems} from "../../spec/screenPlay/questions/todo_List_items";
  import {expect} from "../../spec/expect";
  import {See} from "serenity-js/lib/screenplay";

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
               new EnterValues(Title,FirstName,LastName)
           )
       });


       this.When(/^gives his Date of birth (.*), (.*), (.*)$/, function (Date:string, Month:string, Year:string) {
           return actor.attemptsTo(
               new SelectDates(Date,Month,Year)

           )
       });


       this.When(/^he provides his (.*) for (.*)$/, function (PostCode:string,AccountType:string) {
           return actor.attemptsTo(
               ProvidePostCode.postCodeValue(PostCode),
               new SelectAccountType(AccountType)

           )

       });

       this.When(/^he fills his account details as (.*),(.*)$/, function (SortCode: string, AccountNumber: string) {
           return actor.attemptsTo(
               new AccountDetails(SortCode,AccountNumber)
           )
       });

       this.When(/^he clicks on Continue to move to Login tab$/, function()  {
           return actor.attemptsTo(
           Click.on(TodoList.click_on_continue_to_register)
           )
       });


       this.Then(/^he should get see an error message containing that (.*)$/, function (ErrorMessage: string) {
           return actor.attemptsTo(
               See.if(TodoListItems.errorDisplayedForRegistration, actual => expect(actual).to.eventually.contain(ErrorMessage))
           )
       });


   };

