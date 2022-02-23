Feature: Delete User
    In order to maintain the portal
    As a member Tara
    Tara wants to able to delete account

    Background:
        Given Tara has login with the correct credentials
            | username | password |
            | taratan  | asdfghjk |

    Scenario Outline: Able to delete account
        When she delete account
        Then she should able to delete account






