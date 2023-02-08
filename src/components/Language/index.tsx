import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';

import { useResponsive } from '@hooks/useResponsive'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type LanguageProps = {
  isAcronyms: boolean,
}

const Language = ({ isAcronyms }: LanguageProps) => {
  const { t: translation , i18n } = useTranslation()
  const responsive = useResponsive()

  const isPc = responsive['lg']
  
  const handleLanguage = (value : boolean) => {
    i18n.changeLanguage(value ? "vi" : "en");
  }

  if (isPc) {
    return (
      <div className={styledModule`language`}>
        <Switch
          checkedChildren={
            isAcronyms ? <p>{translation("language.VN")}</p> : <p>{translation("language.vietnamese")}</p>
          }
          className={styledModule`language-switch`}
          unCheckedChildren={
            isAcronyms ? <p>{translation("language.EN")}</p> : <p>{translation("language.english")}</p>
          }
          onChange={handleLanguage}
          defaultChecked
        />
      </div>
    )
  }

  return (
    <div className={styledModule`languageMobile`}>
      <Switch
        checkedChildren={
          isAcronyms ? <p>{translation("language.VN")}</p> : <p>{translation("language.vietnamese")}</p>
        }
        className={styledModule`language-switch`}
        unCheckedChildren={
          isAcronyms ? <p>{translation("language.EN")}</p> : <p>{translation("language.english")}</p>
        }
        onChange={handleLanguage}
        defaultChecked
      />
    </div>
  )
}

export default Language;