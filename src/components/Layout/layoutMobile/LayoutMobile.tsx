import { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

const MobileLayout: FC = () => {
  return (
    <Outlet />
  )
}

export default memo(MobileLayout, () => true)
