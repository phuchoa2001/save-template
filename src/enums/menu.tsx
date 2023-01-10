import {
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export const MENU_ITEMS = () => {
  const { t: translation } = useTranslation()

  const listMenu = [
    {
      key: '1',
      icon: <UnorderedListOutlined />,
      label: translation("menu.listTemplate"),
    }
  ]
  return listMenu;
}
