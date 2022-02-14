Feature: Register New Account

    In order to access the portal
    As a member Tara
    Tara wants to register a new account

    Background:
        Given Tara is on the login page
        And she wants to register a new account
    @test
    Scenario Outline: Able to register an account
        When she register using the credentials
            | firstname | lastname | username | password |
            | Tara      | Tan      | taratan  | asdfghjk |
        Then she should see that registration is successful
            | successMessage          |
            | Registration successful |


