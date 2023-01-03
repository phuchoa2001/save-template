import { Row } from 'antd';

import Template from './Template';
import { useFetchTemplateQuery } from '@service/template';

type ListTemplateProps = {
  onAddRTag: (title: string) => void
}

const ListTemplate = (props: ListTemplateProps) => {
  const { data, isLoading } = useFetchTemplateQuery();
  return (
    <Row gutter={[16, 16]}>
      {!isLoading &&
        (
          data?.map((item) => (
            <Template onAddRTag={props.onAddRTag} item={item} />
          ))
        )
      }
    </Row>
  )
}

export default ListTemplate;