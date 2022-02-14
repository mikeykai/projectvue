import { Ensure, includes } from '@serenity-js/assertions'
import { Duration, Task } from '@serenity-js/core'
import { isVisible, Text, Wait } from '@serenity-js/webdriverio'

import { LoginForm } from '../page-objects/LoginForm'
import { PortalNotify } from '../page-objects/PortalNotify'

export class VerifyLogin {
    static isSuccessful = () =>
        Task.where(
            `#actor verifies that login has succeeded`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                PortalNotify.successMessage(),
                isVisible()
            ),
            Ensure.that(Text.of(PortalNotify.successMessage()), includes('logged in with Vue + Vuex & JWT!!')),
        )

    static failed = () =>
        Task.where(
            `#actor verifies that login has failed`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                LoginForm.errorMessage(),
                isVisible()
            ),
            Ensure.that(
                Text.of(LoginForm.errorMessage()),
                includes('Username or password is incorrect')
            )
        )

    static backToLogin = () =>
        Task.where(
            `#actor verifies has logout back to the login screen`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                LoginForm.usernameField(),
                isVisible()
            )
        )
}
