import { useState } from 'react';
import { Menu, Layout } from 'antd'
import clsx from 'clsx';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

import { toStyledModuleNames } from '@utils/styledModuleName'
import { MENU_ITEMS as items } from '@enums/menu';

import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)


function LeftSideBar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout.Sider className={styledModule`sideBar`} collapsed={collapsed}>
      <div className={clsx(styledModule`sideBar-header`,
        collapsed ? styledModule`active` : ""
      )}>
        <h3 className={clsx(styledModule`sideBar-title`,
          collapsed ? styledModule`active` : ""
        )}><span>X</span>oaNen</h3>
        {collapsed ?
          <MenuUnfoldOutlined onClick={() => setCollapsed(prev => !prev)} className={styledModule`sideBar-icon`} />
          :
          <MenuFoldOutlined onClick={() => setCollapsed(prev => !prev)} className={styledModule`sideBar-icon`} />
        }
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Layout.Sider>
  )
}

export default LeftSideBar