import { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

// ** Styles
import { toStyledModuleNames } from '@utils/styledModuleName';
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles);

const MobileLayout: FC = () => {
  return (
    <div className={styledModule`main-mobile`}>
      <Outlet />
    </div>
  )
}

export default memo(MobileLayout, () => true)