import React from 'react'
import { useTranslation } from 'react-i18next';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type Props = {}

const Category = (props: Props) => {
  const { t: translation } = useTranslation()

  return (
    <div className={styledModule`category`}>{translation("category.textTest")}</div>
  )
}

export default Category;