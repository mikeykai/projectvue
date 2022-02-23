/* eslint-disable @typescript-eslint/no-var-requires */
import { defineParameterType } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';

if (!process.env.CIRCLECI) {
    require('dotenv').config()
}

defineParameterType({
    regexp: /[A-Z][a-z]+/,
    transformer(name: string) {
        return actorCalled(name);
    },
    name: 'actor',
});

defineParameterType({
    regexp: /he|she|they|his|her|their/,
    transformer() {
        return actorInTheSpotlight();
    },
    name: 'pronoun',
});
