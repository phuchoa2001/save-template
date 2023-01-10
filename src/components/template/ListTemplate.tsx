import { Fragment, useState } from 'react';
import { Row, Pagination } from 'antd';

import Template from './Template';

import { LIMIT } from '@enums/filter';

import { useFetchTemplateQuery } from '@service/template';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type ListTemplateProps = {
  onAddRTag: (title: string) => void
}

const ListTemplate = (props: ListTemplateProps) => {
  const [filter, setFilter] = useState({
    limit: LIMIT,
    page: 1
  });

  const { data, isLoading } = useFetchTemplateQuery(filter);

  const handleChangeFilter = (data: any) => {
    setFilter(prev => ({
      ...prev,
      ...data
    }))
  }

  const handlePagination = (page: number) => {
    handleChangeFilter({ page })
  }

  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        {!isLoading &&
          (
            data?.map((item) => (
              <Template onAddRTag={props.onAddRTag} key={item.id} item={item} />
            ))
          )
        }
      </Row>
      {!isLoading &&
        <div className={styledModule`pagination`}>
          <Pagination
            defaultCurrent={1}
            total={100}
            onChange={handlePagination}
            showSizeChanger={false}
          />
        </div>
      }
    </Fragment>
  )
}

export default ListTemplate;