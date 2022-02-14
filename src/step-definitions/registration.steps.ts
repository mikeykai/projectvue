import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';

import { NavigateTo } from '../tasks/NavigateTo';
import { Registration } from '../tasks/Registration';
import { VerifyRegistration } from '../tasks/VerifyRegistration';

Given(
    '{actor} is on the login page', async (actor: Actor) =>
        await actor.attemptsTo(
            Navigate.to('https://laymui-login-project.vercel.app/'),
        )
);

Given(
    '{pronoun} wants to register a new account', 
    async (actor: Actor) =>
        await actor.attemptsTo(NavigateTo.registerNewAccount())
)

When('{pronoun} register using the credentials', async (actor: Actor,table: DataTable) => {

    const firstname = table.hashes()[0].firstname
    const lastname = table.hashes()[0].lastname
    const username = table.hashes()[0].username
    const password = table.hashes()[0].password
    await actor.attemptsTo(
        Registration.using(firstname, lastname, username, password),
    ) 
}
); 

Then(
    '{pronoun} should see that registration is successful', 
    async (actor: Actor, table: DataTable) => {
        const successMessage = table.hashes()[0].successMessage
        await actor.attemptsTo(
            VerifyRegistration.isSuccessful(successMessage)
        )
    }
)