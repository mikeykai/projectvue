import { Duration, Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio'

import { LoginForm } from '../page-objects/LoginForm'

export const Login = {
    using: (username: string, password: string) =>
        Task.where(
            `#actor logs in as ${username}`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                LoginForm.usernameField(),
                isVisible()
            ),
            Enter.theValue(username).into(LoginForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(LoginForm.loginButton())
        ),
}
 