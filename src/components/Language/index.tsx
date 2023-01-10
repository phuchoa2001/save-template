import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type LanguageProps = {
  isAcronyms: boolean
}

const Language = ({ isAcronyms }: LanguageProps) => {
  const { t: translation } = useTranslation()

  return (
    <div className={styledModule`language`}>
      <Switch
        checkedChildren={
          isAcronyms ? <p>{translation("language.VN")}</p> : <p>{translation("language.vietnamese")}</p>
        } className={styledModule`language-switch`}
        unCheckedChildren={
          isAcronyms ? <p>{translation("language.EN")}</p> : <p>{translation("language.english")}</p>
        }
        defaultChecked
      />
    </div>
  )
}

export default Language;