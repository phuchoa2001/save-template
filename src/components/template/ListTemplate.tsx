import { Fragment, useState } from 'react';
import { Row, Pagination, Col } from 'antd';

import Template from './Template';
import ListCategory from '../Category/ListCategory';
import SearchTemplate from './SearchTemplate';

import { useResponsive } from 'ahooks';

import { LIMIT } from '@enums/filter';

import { FilterTemplateModel } from '@models/template';

import { useFetchTemplateQuery } from '@service/template';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type ListTemplateProps = {
  onAddRTag: (title: string) => void
}
type FilterTemplateProps = {
  filter: FilterTemplateModel
}
const FilterTemplate = (props: FilterTemplateProps) => {
  const responsive = useResponsive()
  const isPc = responsive['lg']

  if (isPc) {
    return (
      <div className={styledModule`filter`}>
        <div className={styledModule`listCategory`}>
          <ListCategory />
        </div>
        <div className={styledModule`search`}>
          <SearchTemplate />
        </div>
      </div>
    )
  }
  return (
    <div className={styledModule`filter`}>
      <div className={styledModule`listCategory`}>
        <ListCategory />
      </div>
    </div>
  )
}

const ListTemplate = (props: ListTemplateProps) => {
  const [filter, setFilter] = useState<FilterTemplateModel>({
    limit: LIMIT,
    page: 1
  });

  const { data, isLoading } = useFetchTemplateQuery(filter);

  const responsive = useResponsive()
  const isPc = responsive['lg']

  const handleChangeFilter = (data: any) => {
    setFilter(prev => ({
      ...prev,
      ...data
    }))
  }

  const handlePagination = (page: number) => {
    handleChangeFilter({ page })
  }

  if (isPc) {
    return (
      <Fragment>
        <FilterTemplate filter={filter} />
        <Row gutter={[16, 16]}>
          {!isLoading &&
            (
              data?.map((item) => (
                <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} key={item.id}>
                  <Template onAddRTag={props.onAddRTag}  item={item} />
                </Col>
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
  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        {!isLoading &&
          (
            data?.map((item) => (
              <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} key={item.id}>
                <Template onAddRTag={props.onAddRTag} item={item} />
              </Col>
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