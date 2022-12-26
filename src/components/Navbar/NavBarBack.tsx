import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@components/CustomIcon'

import { toStyledModuleNames } from '@utils/styledModuleName';
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

const NavBarBack = () => {
  const navigate = useNavigate();
  return (
    <div className={styledModule`navbar-back`} onClick={() => navigate(-1)}>
      <Icon iconName="arrowBackIcon" />
    </div>
  )
}

export default memo(NavBarBack);
