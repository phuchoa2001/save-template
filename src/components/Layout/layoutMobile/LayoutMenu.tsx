import React, { useState } from 'react'

// ** NavBarBack Component Imports
import { Icon } from '@components/CustomIcon';

import { MENU_ITEMS as items } from '@enums/menu';

import { toStyledModuleNames } from '@utils/styledModuleName';
import styles from './styles.module.scss'
import clsx from 'clsx';
const styledModule = toStyledModuleNames(styles);

const LayoutMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styledModule`sideBar-menu`} >
      {!open ?
        <Icon
          iconName="menu"
          className={styledModule`sideBar-icon`}
          onClick={() => setOpen(true)}
        /> :
        <Icon
          iconName="close"
          className={styledModule`sideBar-icon`}
          onClick={() => setOpen(false)}
        />
      }
      <div className={clsx(styledModule`sideBar-box`, open ? styledModule`active` : "")} >
        {items.map(item => (
          <p key={item.key}>{item.label}</p>
        ))}
      </div >
    </div >
  )
}

export default LayoutMenu;