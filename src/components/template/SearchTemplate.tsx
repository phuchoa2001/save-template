import { useCallback, useState } from 'react';
import { Modal, Input, Row, Col } from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';
import { useDebounce } from 'ahooks';

import Template from './Template';

import { useResponsive } from '@hooks/useResponsive'

import { LIMIT_SEARCH_MODAL } from '@enums/filter';

import { FilterTemplateModel } from '@models/template';

import { useFetchTemplateQuery } from '@service/template';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)


const SearchTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState<FilterTemplateModel>({
    search: "",
    limit: LIMIT_SEARCH_MODAL,
    page: 1
  });
  const debouncedValue = useDebounce(filter, { wait: 500 });
  const responsive = useResponsive()

  const isPc = responsive['lg']

  const { data, isLoading } = useFetchTemplateQuery(debouncedValue);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const SearchModal = useCallback(() => {
    return (
      <Modal title="Tìm kiếm template"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Input
          placeholder="Tìm kiếm..."
          allowClear
          onChange={(e) => setFilter({
            search: e.target.value,
            limit: LIMIT_SEARCH_MODAL,
            page: 1
          })}
        />
        <div className={styledModule`searchTemplate_list`}>
          <Row gutter={[16, 16]}>
            {!isLoading &&
              (
                data?.map((item) => (
                  <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={24} key={item.id}>
                    <Template onAddRTag={() => false} item={item} />
                  </Col>
                ))
              )
            }
          </Row>
        </div>
      </Modal>
    )
  }, [isModalOpen, data])
  if (isPc) {
    return (
      <div className={styledModule`searchTemplate`}>
        <SearchOutlined onClick={() => setIsModalOpen(true)} />
        {SearchModal()}
      </div>
    )
  }

  return (
    <div className={styledModule`searchTemplateMobile`}>
      <SearchOutlined onClick={() => setIsModalOpen(true)} />
      {SearchModal()}
    </div>
  )
}

export default SearchTemplate;