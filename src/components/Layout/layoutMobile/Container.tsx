import React, { memo, useState } from 'react'
import { Drawer, List } from 'antd';

import NavBarBack from '@components/Navbar/NavBarBack';
import LayoutMenu from './LayoutMenu';

import CustomIcon, { IconType } from '@components/CustomIcon';

import { toStyledModuleNames } from '@utils/styledModuleName';
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles);

export type TabMenuItemOption = {
  key: string
  title: string
  iconName: IconType
  onClick?: (key: string) => void
}

type ContainerProps = {
  label?: string,
  hideMenu?: boolean,
  hideBack? : boolean,
  children: React.ReactNode | React.ReactNode[],
  labelOptions?: {
    header: string
    activeKey: string
    options: Array<TabMenuItemOption>
  }
}
const Container = (props: ContainerProps) => {
  const { label, labelOptions, children, hideMenu = false , hideBack = false } = props;
  const shouldRenderLabelOptions = !label && !!labelOptions

  const [showLabelOptions, setShowLabelOptions] = useState<boolean>(false)
  return (
    <>
      <div className={styledModule`containerMobile-header`}>
        {!hideBack ? <NavBarBack /> : <div></div>}
        <div className={styledModule`page-title`}>
          {shouldRenderLabelOptions ? (
            <div className={styledModule`label-wrapper`} onClick={() => setShowLabelOptions(true)}>
              <div className={styledModule`label`}>{labelOptions.header}</div>
              <CustomIcon className={styledModule`icon`} iconName="chevronDown" />
            </div>
          ) : (
            <div className={styledModule`containerMobile-label`}>{label}</div>
          )}
        </div>
        {!hideMenu ? <LayoutMenu /> : <div></div>}
      </div>
      <div className={styledModule`container`}>
        {children}
      </div>
      {shouldRenderLabelOptions && (
        <Drawer
          className={styledModule`tab-drawer`}
          closable={false}
          placement="bottom"
          open={showLabelOptions}
          onClose={() => setShowLabelOptions(false)}>
          <div className={styledModule`tab-header`}>{labelOptions.header}</div>
          <List
            className={styledModule`tab-list`}
            dataSource={labelOptions?.options}
            renderItem={(item) => (
              <div
                key={item.key}
                className={styledModule(`tab-item ${item.key === labelOptions.activeKey ? 'active' : ''}`)}
                onClick={() => {
                  setShowLabelOptions(false)
                  item.onClick && item.onClick(item.key)
                }}>
                <CustomIcon className={styledModule`icon`} iconName="arrowRight" />
                <div className={styledModule`content`}>
                  <CustomIcon className={styledModule`icon`} iconName={item.iconName} />
                  {item.title}
                </div>
              </div>
            )}
          />
        </Drawer>
      )}
    </>
  )
}

export default memo(Container)
