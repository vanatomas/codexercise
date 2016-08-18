Feature: Sauce Labs page

  Scenario: Verify indiviual plan is present and costs
    Given User on the sauce page
    Then  User clicks on Pricing
    Then  User locates Individual plan
    Then  User validates Individual plan cost