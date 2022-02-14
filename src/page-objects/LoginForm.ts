import { by, Target } from '@serenity-js/webdriverio'

export const LoginForm = {
    usernameField: () =>
        Target.the('username field').located(
            by.css('input[data-testid=username]')
        ),

    passwordField: () =>
        Target.the('password field').located(
            by.css('input[data-testid=password]')
        ),

    loginButton: () =>
        Target.the('login button').located(
            by.css('button[data-testid=login]')
        ),

    registerButton: () =>
        Target.the('register button').located(
            by.css('a[data-testid=register]')
        ),

    errorMessage: () =>
        Target.the('alert message').located(
            by.css('div[data-testid=alert]')
        ),

    registrationSuccessMessage: () =>
        Target.the('alert message').located(
            by.css('div[data-testid=alert]')
        ),

}