import {Actor} from "@serenity-js/core/lib/screenplay";
import {BrowseTheWeb, Click, Enter} from "serenity-js/lib/serenity-protractor";
import {protractor} from "protractor";
import {TodoList} from "../../spec/screenPlay/components/todo_list";
import {Start} from "../../spec/screenPlay/tasks/start";
import {EnterValues, LogOnPageForm, ProvidePostCode} from "../../spec/screenPlay/tasks/enter";
import {SelectAccountType, SelectDates} from "../../spec/screenPlay/tasks/select";
import {TodoListItems} from "../../spec/screenPlay/questions/todo_List_items";
import {expect} from "../../spec/expect";
import {See} from "serenity-js/lib/screenplay";
import {get} from "http";


export = function toregWithAccountsStepDefs() {

    let actor: Actor;
    this.setDefaultTimeout(30 * 1000);

    this.Given(/^that (.*) want to register on Llyod bank with different account types$/, function (actorName: string) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
        return actor.attemptsTo(
            Start.navigateToPage(),
            Click.on(TodoList.clicl_on_register),
        )
    });


    this.Given(/^he enters his details as (.*),(.*),(.*)$/, function (Title: string, FirstName: string, LastName: string) {
        return actor.attemptsTo(
            new EnterValues(Title, FirstName, LastName)
        )
    });


    this.Given(/^gives his Date of birth as (.*),(.*),(.*)$/, function (Date: string, Month: string, Year: string) {
        return actor.attemptsTo(
            new SelectDates(Date, Month, Year)
        )
    });


    this.Given(/^he enters his address (.*)$/, function (PostCode: string) {
        return actor.attemptsTo(
            new ProvidePostCode(PostCode)
        )
    });


    this.When(/^Daniel selects the account type as (.*)$/, function (AccountType:string) {
        return actor.attemptsTo(
            new SelectAccountType(AccountType)
        )
    });
    this.When(/^he fills the card number as (.*)$/, function (CardNumber:string) {
        return actor.attemptsTo(
            Enter.theValue(CardNumber)
                .into(TodoList.credit_card_number)
        )

    });

    this.When(/^he confirms it and continue$/, function () {
        return actor.attemptsTo(
            Click.on(TodoList.click_on_continue_to_register)
        )
    });


    this.Then(/^he should see an error message containing (.*)$/, function (ErrorMessage:string) {
        return actor.attemptsTo(
            See.if(TodoListItems.errorDisplayedForRegistration, actual => expect(actual).to.eventually.contain(ErrorMessage))
        )
    });




   this.When(/^Daniel chooses the account type as (.*)$/, function (AccountType:string) {
    return actor.attemptsTo(
        new SelectAccountType(AccountType)
    )

    });


    this.When(/^he fills the Reference number as (.*)$/, function (ReferenceNumber:string) {
        return actor.attemptsTo(
            Enter.theValue(ReferenceNumber)
                .into(TodoList.reference_loan_number)
        )
    });

    this.When(/^he likes to continue to register$/, function () {
        return actor.attemptsTo(
            Click.on(TodoList.click_on_continue_to_register)
        )
    });


    this.Then(/^he should be able to navigate to the login on details with text (.*)$/, function (LogOnPage:string) {
        return actor.attemptsTo(
            See.if(TodoListItems.messageDisplayedOnLogOnPage, actual => expect(actual).to.eventually.equal(LogOnPage))
        )

    });

    this.When(/^he fills the logon form by giving the (.*),(.*),(.*),(.*)$/, function (UserId:string,PreferredPassword:string,ConfirmPassword:string,Email:string) {
        return actor.attemptsTo(
            new LogOnPageForm(UserId,PreferredPassword,ConfirmPassword,Email)
        )
    });

    this.When(/^he confirms his details by submitting it$/, function () {
       return actor.attemptsTo(
           Click.on(TodoList.submit_log_on_form)
       )
    });

    this.Then(/^he should be navigated to a page with security message (.*)$/, function (SecurityMessage:string) {
        return actor.attemptsTo(
            See.if(TodoListItems.messageDisplayedForFailedRegister, actual => expect(actual).to.eventually.equal(SecurityMessage))
        )
    });

};
