import React from 'react'
import { Col, Card, Typography, Space, Tag } from 'antd';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type Props = {
  onAddRTag: (title: string) => void
}

const randomColor = () => {
  const colors = [
    "#108ee9", "#87d068", "#2db7f5", "#108ee9",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const Template = (props: Props) => {
  const { onAddRTag } = props;

  return (
    <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6} onClick={() => onAddRTag("React")}>
      <Card
        bodyStyle={{ padding: 10 }}
        className={styledModule`card`}
        cover={<img alt="example" className={styledModule`card-image`}
          src="https://i.pinimg.com/564x/98/ea/f7/98eaf78154e4245da29b3cc25c5f2d02.jpg" />}
      >
        <Typography.Title level={4}>Nodejs</Typography.Title>
        <Space className={styledModule`card-tags`}>
          <Tag color={randomColor()}>mongdb</Tag>
          <Tag color={randomColor()}>express</Tag>
        </Space>
        <Typography.Paragraph
          type="secondary"
          ellipsis={
            {
              rows: 1,
              expandable: true,
              symbol: 'more',
            }
          }
        >
          <span>
            <Typography.Text strong>Mô tả :</Typography.Text>
          </span>
          Đôi nét về tác giả Hạ Tri Chương
          - Hạ Tri Chương , tự Quý Chân, hiệu Tứ Minh cuồng khách, quê ở Vĩnh Hưng, Việt Châu

          - Ông đỗ tiến sĩ năm 695, sinh sống, học tập và làm quan trên 50 năm ở kinh đô Trường An, rất được Đường Huyền Tông vị nể. Sau đó, ông xin từ quan về làm đạo sĩ

          - Ông là bạn vong niên của thi hào Lí Bạch

          - Ông thích uống rượu, tính tình hào phóng, ông còn để lại 20 bài thơ
        </Typography.Paragraph>
      </Card>
    </Col>
  )
}

export default Template