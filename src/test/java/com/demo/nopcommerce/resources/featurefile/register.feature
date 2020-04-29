Feature: Register Functionality
  As a user
  I want to register on nop commerce website

  Scenario: Verify user should navigate to register page successfully
    Given I am on nop commerce Home Page
    When I click on register feature
    Then I should be on register page successfully

  Scenario: Verify user should register successfully with valid credentials
    Given I am on nop commerce Home Page
    And I click on register feature
    And I select gender
    When I enter user first name "Jiya"
    And I enter last name "Pandya"
    And I select day of birth "8"
    And I select date of birth month "april"
    And I select date of birth year "2010"
    And I enter "email"
    And I enter company name "Jiya limited"
    And I click on check box of news letter
    And I enter password "Rahi0804"
    And I enter confirm password "Rahi0804"
    And I click on register button
    Then I should register successfully


  Scenario Outline: Verify user should not register without last name
    Given I am on nop commerce Home Page
    And I click on register feature
    And I select gender
    When I enter user first name "<firstName>"
    And I enter last name "<lastName>"
    And I select day of birth "<day>"
    And I select date of birth month "<month>"
    And I select date of birth year "<year>"
    And I enter email "<emailId>"
    And I enter company name "<companyName>"
    And I click on check box of news letter
    And I enter password "<password>"
    And I enter confirm password "<confirmPassword>"
    And I click on register button
    Then I should not register successfully "<errorMessage>"
    Examples:
      | firstName | lastName | day | month | year | emailId             | companyName | password      | confirmPassword | errorMessage           |
      | bhavesh   |          | 1   | 1   | 1985 | nirooshan@gmail.com | abc limited | coral12345@@ | coral12345@@   | Last name is required. |
      | lamee     |          | 2   | 2     | 1975 | niron@gmail.com     | abd limited | coral123@@   | coral123@@     | Last name is required. |
      | brijesh   |          | 3   | 3     | 1995 | practice@gmail.com  | abs limited | coral345@@   | coral345@@     | Last name is required. |
      | ankita    |          | 4   | 4     | 1965 | return@gmail.com    | abq limited | coral12345@@   | coral12345@@     | Last name is required. |
      | mey       |          | 5   | 5    | 1970 | anusk@gmail.com     | abr limited | coral1345@@  | coral1345@@    | Last name is required. |


