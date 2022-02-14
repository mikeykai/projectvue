import { Ensure, equals } from '@serenity-js/assertions'
import { Duration, Task } from '@serenity-js/core'
import { isVisible, Text, Wait } from '@serenity-js/webdriverio'

import { LoginForm } from '../page-objects'
export class VerifyRegistration {
    static isSuccessful = (message: string) =>
        Task.where(
            `#actor verifies that registration is successful`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                LoginForm.registrationSuccessMessage(),
                isVisible()
            ),
            Ensure.that(
                Text.of(LoginForm.registrationSuccessMessage()),
                equals(message)
            )
        )
      
}