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
      <Container label="Thông tin Tempalte" hideMenu={true}>
        <div>Template : {templateId}</div>
        <div>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Architecto repellat aliquam
          perferendis aut suscipit asperiores veritatis
          est illo non, ullam mollitia sapiente iure
          laborum optio maxime molestias voluptatibus omnis! Odio?
        </div>
        <div>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Architecto repellat aliquam
          perferendis aut suscipit asperiores veritatis
          est illo non, ullam mollitia sapiente iure
          laborum optio maxime molestias voluptatibus omnis! Odio?
        </div>
        <div>Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Architecto repellat aliquam
          perferendis aut suscipit asperiores veritatis
          est illo non, ullam mollitia sapiente iure
          laborum optio maxime molestias voluptatibus omnis! Odio?
        </div>
      </Container>
    </Fragment>
  )
}

export default InfoTempate