import { useState } from 'react'
import { Col, Row } from 'antd';
import clsx from 'clsx';

// ** NavBarBack Component Imports
import { Icon } from '@components/CustomIcon';
import Language from '@components/Language';
import SearchTemplate from '@components/template/SearchTemplate';

import { MENU_ITEMS as items } from '@enums/menu';

// ** Styles
import { toStyledModuleNames } from '@utils/styledModuleName';
import styles from './styles.module.scss'
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
        <Row className={styledModule`sideBar-more`}>
          <Col span={21}>
            <Language isAcronyms={false} />
          </Col>
          <Col span={3}>
            <div className={styledModule`sideBar-search`}>
              <SearchTemplate />
            </div>
          </Col>
        </Row>
        <div className={styledModule`sideBar-list`}>
          {items().map(item => (
            <p key={item.key} className={styledModule`sideBar-item`}>{item.label}</p>
          ))}
        </div>
      </div >
    </div >
  )
}

export default LayoutMenu;