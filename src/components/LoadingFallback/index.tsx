import { FC, memo } from 'react'
import { isEqual } from 'lodash'
import { Spin } from 'antd'
import { useClassnames } from '@hooks/useClassnames'
import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

type LoadingFallbackProps = {
  asOverlay?: boolean
  fullscreen?: boolean
}

const LoadingFallback: FC<LoadingFallbackProps> = (props) => {
  const { asOverlay, fullscreen } = props
  const localClassname = useClassnames({ root: true, asOverlay, fullscreen }, true)
  return (
    <div className={styledModule(localClassname)}>
      <Spin size="large" spinning />
    </div>
  )
}

// Only re-rendering when props was changed
export default memo(LoadingFallback, (prevProps, nextProps) => isEqual(prevProps, nextProps))
