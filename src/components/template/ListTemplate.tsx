import { Row } from 'antd';

import Template from './Template';

type ListTemplateProps = {
  onAddRTag: (title: string) => void
}

const ListTemplate = (props: ListTemplateProps) => {
  return (
    <Row gutter={[16 , 16]}>
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
      <Template onAddRTag={props.onAddRTag} />
    </Row>
  )
}

export default ListTemplate;