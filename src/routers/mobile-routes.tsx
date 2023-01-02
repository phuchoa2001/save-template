import InfoTempate from '../page/homePage/InfoTempate'

import { TEMPLATE_ROUTER } from '@enums/router'

/*
 * List of private routes
 */
export const MOBILE_ROUTERS = [
  {
    path: `/${TEMPLATE_ROUTER}/:templateId`,
    element: <InfoTempate />
  }
]
