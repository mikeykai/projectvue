/* eslint-disable no-unexpected-multiline */
import { by, Target } from '@serenity-js/webdriverio'

export const PortalNotify = {
    successMessage: () => 
        Target.the('success message').located(
            (by.tagName('p'))
        ),

    deleteAccount: () =>
        Target.the('delete button').located(
            by.css('a[text danger]')
        ),
           
    logoutAccount: () =>
        Target.the('logout button').located(
            (by.css('div div div div div p a'))
        )
}

