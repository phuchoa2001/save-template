import { useResponsive } from '@hooks/useResponsive'

import Container from '@components/Layout/layoutMobile/Container'

const HomePage = () => {
  const responsive = useResponsive()
  if (responsive['lg']) {
    return (
      <div >
        Page Desktop
      </div>
    )
  }

  return (
    <Container label="Page Home">
      Page Mobile
    </Container>
  )
}

export default HomePage;