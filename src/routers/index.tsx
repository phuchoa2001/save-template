import { memo, Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'

// ** Router Component Imports
import LoadingFallback from '@components/LoadingFallback'
import LayoutPc from '@components/Layout/layoutPc/LayoutPc'
import MobileLayout from '@components/Layout/layoutMobile/LayoutMobile'
import { useResponsive } from '@hooks/useResponsive'

import { PUBLIC_ROUTERS } from './public-routes'
import { MOBILE_ROUTERS } from './mobile-routes'

/**
 * Router for Web view
 * @returns routes config
 */
const PcRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <LayoutPc />,
      children: PUBLIC_ROUTERS
    }
  ])

  return routes
}

const MobileRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MobileLayout />,
      children: [...MOBILE_ROUTERS,...PUBLIC_ROUTERS]
    }
  ])

  return routes
}

const ApplicationRouters = () => {
  const responsive = useResponsive()
  const isPc = responsive['lg']
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback fullscreen />}>
        {isPc ? <PcRoutes /> : <MobileRoutes />}
      </Suspense>
    </BrowserRouter>
  )
}

// Prevent re-render router objecsts
export default memo(ApplicationRouters)
