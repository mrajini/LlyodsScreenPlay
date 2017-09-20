@Rajini
Feature: Sign up a new user

As a new user,
I want to sign up to Llyods bank
so that I can create my account for future logins.

  Scenario Outline: Register a new user using invalid details

    Given that RNme want to register on Llyod bank
    When he enters <Title>, <FirstName>, <LastName>
    And gives his Date of birth <Date>, <Month>, <Year>
    And he provides his <PostCode>
    And he provides his account details as 20-37-21,2345678
    And he clicks on Continue to move to Login tab
    Then he should get see an error message containing that we don't recognise the bank account or credit card details you entered

    Examples:

      |Title|FirstName|LastName|Date|Month|Year|PostCode|
      |Mr   |Rname    |Test    |22  |05   |1977|WD17 1JJ|