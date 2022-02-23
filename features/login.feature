Feature: Login Authentication
    In order to access the portal
    As a member Tara
    Tara wants to able to login into the portal

    Background:
        Given Tara is on login page
        And Tara has registered an account
            | firstname | lastname | username | password |
            | Tara      | Tan      | taratan  | asdfghjk |

    @test
    Scenario Outline: Able to login with correct username and password
        When she logs in using correct credentials
        Then she should able to login

    Scenario Outline: Unable to login with incorrect username and password
        When she logs in using incorrect credentials
            | username | password |
            | taratan  | 000      |
        Then she should not able to login






