import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Actor, Question, TakeNote } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';

import { Login } from '../tasks/Login';
import { Registration } from '../tasks/Registration';
import { VerifyLogin } from '../tasks/VerifyLogin';

Given(
    '{actor} is on login page', async (actor: Actor) =>
        await actor.attemptsTo(
            Navigate.to('https://laymui-login-project.vercel.app/login'),
        )
);

Given(
    '{actor} has registered an account', async (actor: Actor, table: DataTable) => {
        const firstname = table.hashes()[0].firstname
        const lastname = table.hashes()[0].lastname
        const username = table.hashes()[0].username
        const password = table.hashes()[0].password
        await actor.attemptsTo(
          
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
    '{pronoun} logs in using correct {string} and {string}',
    async (actor: Actor, username: string, password: string) =>
        await actor.attemptsTo(
            Login.using(username, password)
        )
)

Then(
    '{pronoun} should able to login',
    async (actor: Actor) => {
        await actor.attemptsTo(
            VerifyLogin.isSuccessful(),
        )
    })

