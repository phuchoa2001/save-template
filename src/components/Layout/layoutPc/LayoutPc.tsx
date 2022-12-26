import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import LeftSideBar from './LeftSideBar'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)


const LayoutPc = () => {
  return (
    <Layout className={styledModule`root`}>
      <LeftSideBar />
      <Layout.Content className={styledModule`container`}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default LayoutPc