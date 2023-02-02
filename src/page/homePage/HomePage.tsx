import React, { useState } from 'react'
import { Tabs } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useResponsive } from '@hooks/useResponsive'

import Container from '@components/Layout/layoutMobile/Container'
import ListTemplate from '@components/template/ListTemplate'

import { TEMPLATE_ROUTER } from '@enums/router'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

const HomePage = () => {
  const [activeKey, setActiveKey] = useState<string>("all");
  const [active, setActive] = useState("1");

  const navigator = useNavigate();
  const responsive = useResponsive()
  const { t: translation } = useTranslation()

  const isPc = responsive['lg']

  const handleAddTag = (title: string) => {
    if (isPc) {
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
    } else {
      navigator(`${TEMPLATE_ROUTER}/${title}`)
    }
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
  if (isPc) {
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
    <Container
      hideBack={true}
      labelOptions={{
        activeKey: active,
        header: "Thể loại",
        options: Array.from(new Array(10)).map((item, index) => ({
          key: index.toString(),
          iconName: 'badge',
          title: translation("category.textTest") + index,
          onClick: (key) => setActive(key)
        }))
      }}
    >
      <div className={styledModule`home-mobile`}>
        <ListTemplate onAddRTag={handleAddTag} />
      </div>
    </Container>
  )
}

export default HomePage;