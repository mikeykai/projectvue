import { Ensure } from '@serenity-js/assertions';
import { Duration, Task } from '@serenity-js/core';
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio';

import { LoginForm } from '../page-objects/LoginForm';
import { RegistrationForm } from '../page-objects/RegistrationForm';

export const Registration = {
    using: (firstname: string, lastname: string, username: string, password: string) =>
        Task.where(
            `#actor register with ${username}`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                LoginForm.registerButton(), 
                isVisible()
            ),
            Click.on(LoginForm.registerButton()),
            Ensure.that(RegistrationForm.firstNameField(), isVisible()),
            Enter.theValue(firstname).into(RegistrationForm.firstNameField()),
            Enter.theValue(lastname).into(RegistrationForm.lastNameField()),
            Enter.theValue(username).into(RegistrationForm.usernameField()),
            Enter.theValue(password).into(LoginForm.passwordField()),
            Click.on(RegistrationForm.registerButton()),
        ),
}
