import { Duration, Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/webdriverio'

import { PortalNotify } from '../page-objects/PortalNotify'

export const Logout = {
    fromPortal: () =>
        Task.where(
            `#actor logout`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                PortalNotify.logoutAccount(),
                isVisible()
            ),
            Click.on(PortalNotify.logoutAccount())      
        ),
}