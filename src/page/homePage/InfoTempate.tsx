import React, { Fragment } from 'react'
import { useParams } from "react-router-dom";

import Container from '@components/Layout/layoutMobile/Container'
import HeaderSeo from '@components/Seo/HeaderSeo'

type Props = {}

const InfoTempate = (props: Props) => {
  const { templateId } = useParams();

  return (
    <Fragment>
      <HeaderSeo
        title={"Template: " + templateId}
        desc={process.env.REACT_APP_PAGE_DESCRIPTION}
        image={process.env.REACT_APP_PAGE_IMAGE}
      />
      <Container label="Thông tin Tempalte">
        <div>Page InfoTempate</div>
      </Container>
    </Fragment>
  )
}

export default InfoTempate