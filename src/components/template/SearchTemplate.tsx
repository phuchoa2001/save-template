import { useState } from 'react';
import { Modal, Input} from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type Props = {}

const SearchTemplate = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSearch = (value: string) => {
    console.log(value)
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styledModule`searchTemplate`}>
      <SearchOutlined onClick={() => setIsModalOpen(true)} />
      <Modal title="Tìm kiếm template"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Input.Search
          placeholder="Tìm kiếm..."
          allowClear
          onSearch={handleSearch}
        />
      </Modal>
    </div>
  )
}

export default SearchTemplate;