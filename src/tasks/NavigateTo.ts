import { Duration, Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/webdriverio'

import { LoginForm } from '../page-objects/LoginForm'

export const NavigateTo = {
  registerNewAccount: () =>
    Task.where(
      `#actor navigate to register new account page`,
      Wait.upTo(Duration.ofMilliseconds(5000000)).until(
        LoginForm.registerButton(),
        isVisible()
      ),
      Click.on(LoginForm.registerButton())
    ),
}

