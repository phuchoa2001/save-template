import { Col, Card, Typography, Space, Tag } from 'antd';

import { templateModel } from '@models/template';

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'
const styledModule = toStyledModuleNames(styles)

type Props = {
  onAddRTag: (title: string) => void,
  item: templateModel
}

const randomColor = () => {
  const colors = [
    "#108ee9", "#87d068", "#2db7f5", "#108ee9",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const Template = (props: Props) => {
  const { onAddRTag, item } = props;
  const { title, desc, image, tags } = item;
  
  return (
    <Col className="gutter-row" xs={24} sm={24} md={8} lg={6} xl={6}>
      <Card
        bodyStyle={{ padding: 10 }}
        className={styledModule`card`}
        cover={<img alt="example" className={styledModule`card-image`}
          src={image} onClick={() => onAddRTag(title)} />}
      >
        <Typography.Title level={4} onClick={() => onAddRTag(title)}>{title}</Typography.Title>
        <Space className={styledModule`card-tags`} wrap={true}>
          {tags.map((item) =>
            <Tag color={randomColor()}>{item}</Tag>
          )}
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
          {desc}
        </Typography.Paragraph>
      </Card>
    </Col>
  )
}

export default Template