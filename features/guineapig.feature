Feature: Guinea Pig page

  Scenario: User verifies email input field
    Given User on the sauce guinea pig page
    Then  User selects first checkbox
    Then  User types email id into the email input field
    Then  the email input value field should contain "saucedemo@gmail.com"

  Scenario: User selects  the "i am a link"
    Given User on the sauce guinea pig page
    Then  User clicks "I am a link"
