import { Row } from 'antd';

import Template from './Template';

type Props = {}

const ListTemplate = (props: Props) => {
  return (
    <Row gutter={[16 , 16]}>
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
    </Row>
  )
}

export default ListTemplate;