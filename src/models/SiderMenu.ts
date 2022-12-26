import { IconType } from '@components/CustomIcon'

export type MenuItem = {
  id: string
  label: string
  icon: IconType
  path: string
  hidden?: boolean
}
