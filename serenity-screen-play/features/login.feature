Feature: UnRegistered User Login

  As a responsible employee,
  I want to skip register and login to Llyods Bank,
  so that I should see that login will be unsuccessful.

  Scenario: Login to Llyods bank without registering to it.
    Given that RName want to login to the llyods bank
    When he enters his user id as RName@gmail.com
    And he enters his password as Rpass1
    And he clickes the login button
    Then he should not get successful login message containing that Your account has been created successfully
    And he should get error message containing that Sorry but we can’t identify you from your User ID or password. Please try again
