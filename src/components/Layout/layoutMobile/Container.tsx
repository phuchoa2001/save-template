import React, { memo } from 'react'

import NavBarBack from '@components/Navbar/NavBarBack';
import LayoutMenu from './LayoutMenu';

import { toStyledModuleNames } from '@utils/styledModuleName';
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles);

type ContainerProps = {
  label: string,
  children: React.ReactNode | React.ReactNode[],
  labelOptions?: {
    children: React.ReactNode
  }
}
const Container = (props: ContainerProps) => {
  return (
    <>
      <div className={styledModule`containerMobile-header`}>
        <NavBarBack />
        {props.labelOptions ?
          props.labelOptions.children :
          <h3 className={styledModule`containerMobile-label`}>{props.label}</h3>
        }
        <LayoutMenu />
      </div>
      <div className={styledModule`container`}>
        {props.children}
      </div>
    </>
  )
}

export default memo(Container)
