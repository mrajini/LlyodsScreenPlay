@SmokeTest
Feature: Sign up a new user

  As a new user,
  I want to sign up to Llyods bank
  so that I can create my account for future logins.



@Registration
  Scenario Outline: Register a new user using invalid details

    Given that <FirstName> want to register on Llyod bank
    When he enters <Title>, <FirstName>, <LastName>
    And gives his Date of birth <Date>, <Month>, <Year>
    And he provides his <PostCode> for savingsAccount
    And he fills his account details as <SortCode>,<AccountNumber>
    And he clicks on Continue to move to Login tab
    Then he should get see an error message containing that <ErrorMessage>
    Examples:

      | Title  | FirstName | LastName | Date | Month | Year | PostCode | SortCode | AccountNumber | ErrorMessage                              |
      | Mr     | Rname     | Test     | 21   | May   | 1977 | WD17 1JJ | 203721   | 23456789      | we don't recognise the bank account       |
      | Mrs    | MName     | MLast    | 17   | Nov   | 1998 | Kt7 0sr  |          | 123456789987  | Please amend the fields highlighted below |
      | Miss   | 123       | 321      | 01   | Jan   | 2009 | WD17 1JJ | 302767   | 87654321      | we don't recognise the bank account       |
      | Ms     | Jack      | B        | 19   | Mar   | 2000 | KT7 0SR  | 123456   |               | Please amend the fields highlighted below |
      | Mrs    | Edward    | Liberty  |      |       |      | WD17 1JJ | 203721   | 23456789      | Please amend the fields highlighted below |
      | Mrs    | MName     | MLast    | 22   | Feb   | 1998 |          | 345678   | 12345678      | Please amend the fields highlighted below |
      | Master | WName     | WLast    | 15   | Jun   | 1981 | Kt7 0sr  | 123456   | 1234567       | Please amend the fields highlighted below |



