import React, { useState } from 'react'
import { Tabs } from 'antd'

import { useResponsive } from '@hooks/useResponsive'

import Container from '@components/Layout/layoutMobile/Container'
import ListTemplate from '@components/template/ListTemplate'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

const HomePage = () => {
  const [activeKey, setActiveKey] = useState<string>("all");

  const responsive = useResponsive()

  const handleAddTag = (title: string) => {
    const key = "key:" + Math.random();

    setItems(prev => (
      [
        ...prev,
        {
          label: title,
          children: <p>New Tab Pane {title}</p>,
          key
        },
      ]
    ));
    setActiveKey(key);
  }
  const [items, setItems] = useState([{
    key: 'all',
    label: "Home",
    children: <ListTemplate onAddRTag={handleAddTag} />
  }]);
  const handleEditTab = (targetKey:
    string | React.MouseEvent<Element, MouseEvent>
    | React.KeyboardEvent<Element>
    , action: 'add' | 'remove') => {
    if (action === 'remove') {
      setItems(prev => prev.filter(item => item.key !== targetKey));
      setActiveKey("all");
    }
  };
  if (responsive['lg']) {
    return (
      <div >
        <Tabs
          hideAdd
          type="editable-card"
          activeKey={activeKey}
          items={items}
          onEdit={handleEditTab}
          onChange={setActiveKey}
        />
      </div>
    )
  }

  return (
    <Container label="Page Home">
      <div className={styledModule`home-mobile`}>
        <ListTemplate onAddRTag={handleAddTag} />
      </div>
    </Container>
  )
}

export default HomePage;