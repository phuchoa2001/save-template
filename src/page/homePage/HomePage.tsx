import { useResponsive } from '@hooks/useResponsive'

import Container from '@components/Layout/layoutMobile/Container'
import ListTemplate from '@components/template/ListTemplate'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

const HomePage = () => {
  const responsive = useResponsive()
  
  if (responsive['lg']) {
    return (
      <div >
        <ListTemplate />
      </div>
    )
  }

  return (
    <Container label="Page Home">
      <div className={styledModule`home-mobile`}>
        <ListTemplate />
      </div>
    </Container>
  )
}

export default HomePage;