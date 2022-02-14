import { equals } from '@serenity-js/assertions';
import { Question } from '@serenity-js/core';
import { by, Target, Text } from '@serenity-js/webdriverio';
import { Element } from 'webdriverio';
export class AlertMessage {
    static all = () =>
        Target.all('alert message').located(by.css('div'))

    static called = (name: string): Question<Promise<Element<'async'>>> =>
        AlertMessage.all()
            .where(Text, equals(name))
            .first()
}