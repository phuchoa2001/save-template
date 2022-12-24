import { memo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

// ** Router Component Imports
import LoadingFallback from '@components/LoadingFallback'



const ApplicationRouters = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback fullscreen />}>
        <div>Set up Sucess</div>
      </Suspense>
    </BrowserRouter>
  )
}

// Prevent re-render router objecsts
export default memo(ApplicationRouters)
