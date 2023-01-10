import { Switch } from 'antd';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type LanguageProps = {
  isAcronyms: boolean
}

const Language = ({ isAcronyms }: LanguageProps) => {
  return (
    <div className={styledModule`language`}>
      <Switch
        checkedChildren={
          isAcronyms ? <p>VN</p> : <p>Tiếng việt</p>
        } className={styledModule`language-switch`}
        unCheckedChildren={
          isAcronyms ? <p>EN</p> : <p>Tiếng Anh</p>
        }
        defaultChecked
      />
    </div>
  )
}

export default Language;