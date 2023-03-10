import { Card, Typography, Space, Tag } from 'antd';
import { useTranslation } from 'react-i18next';

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

  const { t: translation } = useTranslation()

  return (
      <Card
        bodyStyle={{ padding: 10 }}
        className={styledModule`card`}
        cover={<img alt="example" className={styledModule`card-image`}
          src={image} onClick={() => onAddRTag(title)} />}
      >
        <Typography.Title level={4} onClick={() => onAddRTag(title)}>{title}</Typography.Title>
        <Space className={styledModule`card-tags`} wrap={true}>
          {tags.map((item, index) =>
            <Tag color={randomColor()} key={index}>{item}</Tag>
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
            <Typography.Text strong>{translation("template.desc")} :</Typography.Text>
          </span>
          {desc}
        </Typography.Paragraph>
      </Card>
  )
}

export default Template