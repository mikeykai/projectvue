/* eslint-disable @typescript-eslint/no-var-requires */
import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor, Note, Question, TakeNote } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';

import { Login } from '../tasks/Login';
import { Logout } from '../tasks/Logout';
import { NavigateTo } from '../tasks/NavigateTo';
import { Registration } from '../tasks/Registration';
import { VerifyLogin } from '../tasks/VerifyLogin';

Given(
    '{actor} is on login page', async (actor: Actor) =>
        await actor.attemptsTo(
            Navigate.to(process.env.PORTAL_BASE_URL),
        )
);

Given(
    '{actor} has registered an account', async (actor: Actor, table: DataTable) => {
        const firstname = table.hashes()[0].firstname
        const lastname = table.hashes()[0].lastname
        const username = table.hashes()[0].username
        const password = table.hashes()[0].password
        await actor.attemptsTo(

            NavigateTo.registerNewAccount(),
          
            Registration.using(firstname, lastname, username, password),

            TakeNote.of(
                Question.about<string>(`username`, (actor: any) => {
                    return username
                })
            ).as('username'),
            TakeNote.of(
                Question.about<string>(`password`, (actor: any) => {
                    return password
                })
            ).as('password'),
        )}
); 

When(
    '{pronoun} logs in using correct credentials',
    async (actor: Actor) => {
        const username = await Note.of('username').answeredBy(actor)
        const password = await Note.of('password').answeredBy(actor)
        // const username = table.hashes()[0].username
        // const password = table.hashes()[0].password
        await actor.attemptsTo(
            Login.using(`${username}`, `${password}`)
        )
    }
)

Then(
    '{pronoun} should able to login', { timeout: 5000000 },
    async (actor: Actor) => {
        await actor.attemptsTo(
            VerifyLogin.isSuccessful(),
            Logout.fromPortal(),
            VerifyLogin.backToLogin(),
        )
    })

When(
    '{pronoun} logs in using incorrect credentials',
    async (actor: Actor,table: DataTable) => {
        const username = table.hashes()[0].username
        const password = table.hashes()[0].password
        await actor.attemptsTo(
            Login.using(username, password)
        )
    }
)
    
Then(
    '{pronoun} should not able to login', { timeout: 5000000 },
    async (actor: Actor) => {
        await actor.attemptsTo(
            VerifyLogin.failed(),
        )
    })