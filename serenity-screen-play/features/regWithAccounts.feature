@SmokeTest

Feature: Register a new user with different account types

  As a new user,
  I want to sign up to Llyods bank with differet account types
  so that I can create my account for future logins.

  Background:
    Given that Daniel want to register on Llyod bank with different account types
    And he enters his details as Mr,Daniel,Parker
    And gives his Date of birth as 21,Oct,1998
    And he enters his address WD171JJ
 @Credit
  Scenario:Register to Llyods as a credit card holder

    When Daniel selects the account type as Credit Card
    And he fills the card number as 1234567891234234
    And he confirms it and continue
    Then he should see an error message containing Sorry, we don't recognise the bank account or credit card details

 @Loan
    Scenario: Register to Llyods as a Loan holder

      When Daniel chooses the account type as Loans
      And he fills the Reference number as 8765
      And he likes to continue to register
      Then he should be able to navigate to the login on details with text Create your log on details
      When he fills the logon form by giving the DanielParker1,Parker1234,Parker1234,dan@test.com
      And he confirms his details by submitting it
      Then he should be navigated to a page with security message  Please call us to complete your registration

  @Mortgage
  Scenario: Register to Llyods as a Mortgage holder

    When Daniel enters the account type as Mortgage
    And he enters the Mortgage account number as 1987
    And he continue to register
    Then he should be able to see the logon page with text Create your log on details
    When he complete the logon form by giving the DanielParker1,Parker1234,Parker1234,dan@test.com
    And he submits the Logon form
    Then he should be able to see a page with security message  Please call us to complete your registration