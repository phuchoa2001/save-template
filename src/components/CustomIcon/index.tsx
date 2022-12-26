import { FC, Fragment, memo } from 'react'
import clsx from 'clsx'
import { get, isEqual } from 'lodash'

import { ReactComponent as arrowBackIcon } from '@assets/icons/arrow_back.svg'
import { ReactComponent as AssignmentIndIcon } from '@assets/icons/assignment_ind.svg'
import { ReactComponent as driveFileMoveFill } from '@assets/icons/drive_file_move_fill.svg'
import { ReactComponent as ApartmentIcon } from '@assets/icons/apartment.svg'
import { ReactComponent as ArrowDownwardIcon } from '@assets/icons/arrow_downward.svg'
import { ReactComponent as ArrowRightIcon } from '@assets/icons/arrow_right.svg'
import { ReactComponent as ArrowUpwardIcon } from '@assets/icons/arrow_upward.svg'
import { ReactComponent as BadgeIcon } from '@assets/icons/badge.svg'
import { ReactComponent as BusinessCenterIcon } from '@assets/icons/business_center.svg'
import { ReactComponent as CalendarMonthIcon } from '@assets/icons/calendar_month.svg'
import { ReactComponent as CameraIndoorIcon } from '@assets/icons/camera_indoor.svg'
import { ReactComponent as ContactPhoneIcon } from '@assets/icons/contact_phone.svg'
import { ReactComponent as CorporateFareIcon } from '@assets/icons/corporate_fare.svg'
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg'
import { ReactComponent as ChevronRightIcon } from '@assets/icons/chevron_right.svg'
import { ReactComponent as DevicesIcon } from '@assets/icons/devices.svg'
import { ReactComponent as DirectionsBoatIcon } from '@assets/icons/directions_boat.svg'
import { ReactComponent as DirectionsBusIcon } from '@assets/icons/directions_bus.svg'
import { ReactComponent as DirectionsSubwayIcon } from '@assets/icons/directions_subway.svg'
import { ReactComponent as DriveFileRenameOutline } from '@assets/icons/drive_file_rename_outline.svg'
import { ReactComponent as EmojiTransportationIcon } from '@assets/icons/emoji_transportation.svg'
import { ReactComponent as FilterDramaIcon } from '@assets/icons/filter_drama.svg'
import { ReactComponent as FilterListIcon } from '@assets/icons/filter_list.svg'
import { ReactComponent as FolderOpenIcon } from '@assets/icons/folder_open.svg'
import { ReactComponent as HandshakeIcon } from '@assets/icons/handshake.svg'
import { ReactComponent as HandymanIcon } from '@assets/icons/handyman.svg'
import { ReactComponent as InboxIcon } from '@assets/icons/inbox.svg'
import { ReactComponent as InfoIcon } from '@assets/icons/info.svg'
import { ReactComponent as LeaderboardIcon } from '@assets/icons/leaderboard.svg'
import { ReactComponent as ListAltIcon } from '@assets/icons/list_alt.svg'
import { ReactComponent as LocationAwayIcon } from '@assets/icons/location_away.svg'
import { ReactComponent as MenuIcon } from '@assets/icons/menu.svg'
import { ReactComponent as MinorCrashIcon } from '@assets/icons/minor_crash.svg'
import { ReactComponent as MoreVertIcon } from '@assets/icons/more_vert.svg'
import { ReactComponent as NotificationsIcon } from '@assets/icons/notifications.svg'
import { ReactComponent as PhoneForwardedIcon } from '@assets/icons/phone_forwarded.svg'
import { ReactComponent as PolicyIcon } from '@assets/icons/policy.svg'
import { ReactComponent as PriorityHightIcon } from '@assets/icons/priority_high.svg'
import { ReactComponent as PhotoIcon } from '@assets/icons/photo.svg'
import { ReactComponent as ReduceCapacityIcon } from '@assets/icons/reduce_capacity.svg'
import { ReactComponent as SecurityIcon } from '@assets/icons/security.svg'
import { ReactComponent as SettingsAccessibilityIcon } from '@assets/icons/settings_accessibility.svg'
import { ReactComponent as SettingsIcon } from '@assets/icons/settings.svg'
import { ReactComponent as TaskAlt } from '@assets/icons/task_alt.svg'
import { ReactComponent as WaterIcon } from '@assets/icons/water.svg'
import { ReactComponent as WidgetsIcon } from '@assets/icons/widgets.svg'
import { ReactComponent as WorkspacePremiumIcon } from '@assets/icons/workspace_premium.svg'
import { ReactComponent as AddIcon } from '@assets/icons/add.svg'
import { ReactComponent as PrintIcon } from '@assets/icons/print.svg'
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg'
import { ReactComponent as ContentPasteSearchIcon } from '@assets/icons/content_paste_search.svg'
import { ReactComponent as FolderIcon } from '@assets/icons/folder.svg'
import { ReactComponent as InventoryIcon } from '@assets/icons/inventory.svg'
import { ReactComponent as ListIcon } from '@assets/icons/list.svg'
import { ReactComponent as FolderBlue } from '@assets/icons/folder_blue.svg'
import { ReactComponent as FolderGreen } from '@assets/icons/folder_green.svg'
import { ReactComponent as FolderSpecial } from '@assets/icons/folder_special.svg'
import { ReactComponent as FolderZip } from '@assets/icons/folder_zip.svg'
import { ReactComponent as IconLevelTaskGreen } from '@assets/icons/Icon_level_task_green.svg'
import { ReactComponent as IconLevelTaskPurple } from '@assets/icons/Icon_level_task_purple.svg'
import { ReactComponent as IconLevelTask } from '@assets/icons/Icon_level_task.svg'
import { ReactComponent as TopicIcon } from '@assets/icons/topic.svg'
import { ReactComponent as DownloadIcon } from '@assets/icons/download.svg'
import { ReactComponent as AddsIcon } from '@assets/icons/adds.svg'
import { ReactComponent as DescriptionIcon } from '@assets/icons/description.svg'
import { ReactComponent as MoreHorizIcon } from '@assets/icons/more_horiz.svg'
import { ReactComponent as DescriptionaIcon } from '@assets/icons/descriptiona.svg'
import { ReactComponent as ImageaIcon } from '@assets/icons/imagea.svg'
import { ReactComponent as UploadfileIcon } from '@assets/icons/uploadfile.svg'
import { ReactComponent as UploadIcon } from '@assets/icons/upload.svg'
import { ReactComponent as DownloadfileIcon } from '@assets/icons/download_file.svg'
import { ReactComponent as LinkIcon } from '@assets/icons/link.svg'
import { ReactComponent as CopyaIcon } from '@assets/icons/copya.svg'
import { ReactComponent as DeleteIcon } from '@assets/icons/delete.svg'
import { ReactComponent as MaleIcon } from '@assets/icons/male.svg'
import { ReactComponent as SharedIcon } from '@assets/icons/shared.svg'
import { ReactComponent as PasswordIcon } from '@assets/icons/password.svg'
import { ReactComponent as LogoutIcon } from '@assets/icons/logout.svg'
import { ReactComponent as EllipseIcon } from '@assets/icons/ellipse.svg'
import { ReactComponent as TdIcon } from '@assets/icons/td.svg'
import { ReactComponent as EllipseaIcon } from '@assets/icons/ellipsea.svg'
import { ReactComponent as CameraIcon } from '@assets/icons/camera.svg'
import { ReactComponent as AssignmentIcon } from '@assets/icons/assignment.svg'
import { ReactComponent as RangeIcon } from '@assets/icons/range.svg'
import { ReactComponent as BusinessIcon } from '@assets/icons/business.svg'
import { ReactComponent as RenameIcon } from '@assets/icons/rename.svg'
import { ReactComponent as ExpandMoreIcon } from '@assets/icons/expand_more.svg'
import { ReactComponent as AccountTree } from '@assets/icons/account_tree.svg'
import { ReactComponent as OpenInFull } from '@assets/icons/open_in_full.svg'
import { ReactComponent as Copy } from '@assets/icons/copy.svg'
import { ReactComponent as GroupAvatar } from '@assets/icons/group_avatar.svg'
import { ReactComponent as AttachFile } from '@assets/icons/attach_file.svg'
import { ReactComponent as Chat } from '@assets/icons/chat.svg'
import { ReactComponent as DeleteOutlined } from '@assets/icons/delete_outlined.svg'
import { ReactComponent as Share } from '@assets/icons/share.svg'
import { ReactComponent as DucomentsIcon } from '@assets/icons/ducoments.svg'
import { ReactComponent as DocumanstIcon } from '@assets/icons/documanst.svg'
import { ReactComponent as HistoryIcon } from '@assets/icons/history.svg'
import { ReactComponent as PhotoCamera } from '@assets/icons/photo_camera.svg'
import { ReactComponent as CheckIcon } from '@assets/icons/check.svg'
import { ReactComponent as RemoveIcon } from '@assets/icons/remove.svg'
import { ReactComponent as AvatarNoUser } from '@assets/icons/avatar_no-user.svg'
import { ReactComponent as DangerIcon } from '@assets/icons/danger.svg'
import { ReactComponent as WordIcon } from '@assets/icons/word.svg'
import { ReactComponent as ExcelIcon } from '@assets/icons/excel.svg'
import { ReactComponent as ManageAccountsIcon } from '@assets/icons/manage_accounts.svg'
import { ReactComponent as ArrowRightAlt } from '@assets/icons/arrow_right_alt.svg'
import { toStyledModuleNames } from '@utils/styledModuleName'
import ArrowLeftOutlinedIcon from '@ant-design/icons'
import { ReactComponent as Done } from '@assets/icons/done.svg'
import { ReactComponent as CloseDetail } from '@assets/icons/close_detail.svg'
import { ReactComponent as Warning } from '@assets/icons/warning.svg'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

const CustomIcons = {
  share: Share,
  chat: Chat,
  arrowBackIcon: arrowBackIcon,
  driveFileMoveFill: driveFileMoveFill,
  apartment: ApartmentIcon,
  arrowDownward: ArrowDownwardIcon,
  arrowRight: ArrowRightIcon,
  arrowUpward: ArrowUpwardIcon,
  badge: BadgeIcon,
  businessCenter: BusinessCenterIcon,
  calendarMonth: CalendarMonthIcon,
  cameraIndoor: CameraIndoorIcon,
  contactPhone: ContactPhoneIcon,
  corporateFare: CorporateFareIcon,
  close: CloseIcon,
  chevronRight: ChevronRightIcon,
  devices: DevicesIcon,
  directionsBoat: DirectionsBoatIcon,
  directionsBus: DirectionsBusIcon,
  directionsSubway: DirectionsSubwayIcon,
  driveFileRenameOutline: DriveFileRenameOutline,
  emojiTransportation: EmojiTransportationIcon,
  filterDrama: FilterDramaIcon,
  filterList: FilterListIcon,
  folderOpen: FolderOpenIcon,
  handyman: HandymanIcon,
  handshake: HandshakeIcon,
  info: InfoIcon,
  inbox: InboxIcon,
  leaderboard: LeaderboardIcon,
  listAlt: ListAltIcon,
  locationAway: LocationAwayIcon,
  menu: MenuIcon,
  minorCrash: MinorCrashIcon,
  moreVert: MoreVertIcon,
  notifications: NotificationsIcon,
  phoneForwarded: PhoneForwardedIcon,
  policy: PolicyIcon,
  print: PrintIcon,
  priorityHight: PriorityHightIcon,
  reduceCapacity: ReduceCapacityIcon,
  search: SearchIcon,
  security: SecurityIcon,
  settingsAccessibility: SettingsAccessibilityIcon,
  settings: SettingsIcon,
  taskAlt: TaskAlt,
  water: WaterIcon,
  widgets: WidgetsIcon,
  workspacePremium: WorkspacePremiumIcon,
  folderBlue: FolderBlue,
  folderGreen: FolderGreen,
  folderOpenIcon: FolderOpenIcon,
  folderSpecial: FolderSpecial,
  folderZip: FolderZip,
  iconLevelTaskGreen: IconLevelTaskGreen,
  iconLevelTaskPurple: IconLevelTaskPurple,
  iconLevelTask: IconLevelTask,
  folderIcon: FolderIcon,
  inventory: InventoryIcon,
  listIcon: ListIcon,
  add: AddIcon,
  arrowDropDown: ArrowLeftOutlinedIcon,
  contentPasteSearch: ContentPasteSearchIcon,
  topic: TopicIcon,
  download: DownloadIcon,
  adds: AddsIcon,
  description: DescriptionIcon,
  moreHoriz: MoreHorizIcon,
  descriptiona: DescriptionaIcon,
  imagea: ImageaIcon,
  uploadfile: UploadfileIcon,
  upload: UploadIcon,
  downloadfile: DownloadfileIcon,
  link: LinkIcon,
  copya: CopyaIcon,
  delete: DeleteIcon,
  male: MaleIcon,
  shared: SharedIcon,
  password: PasswordIcon,
  logout: LogoutIcon,
  ellipse: EllipseIcon,
  td: TdIcon,
  ellipsea: EllipseaIcon,
  camera: CameraIcon,
  assignment: AssignmentIcon,
  range: RangeIcon,
  business: BusinessIcon,
  rename: RenameIcon,
  iconExpandMore: ExpandMoreIcon,
  accountTree: AccountTree,
  openInFull: OpenInFull,
  copy: Copy,
  ducoments: DucomentsIcon,
  documanst: DocumanstIcon,
  groupAvatar: GroupAvatar,
  attachFile: AttachFile,
  deleteOutlined: DeleteOutlined,
  history: HistoryIcon,
  photoCamera: PhotoCamera,
  check: CheckIcon,
  remove: RemoveIcon,
  avatarNoUser: AvatarNoUser,
  photo: PhotoIcon,
  danger: DangerIcon,
  word: WordIcon,
  excel: ExcelIcon,
  done: Done,
  manageAccounts: ManageAccountsIcon,
  closeDetail: CloseDetail,
  arrowRightAlt: ArrowRightAlt,
  warning: Warning,
  assignmentInd: AssignmentIndIcon
}

const IconNames = [
  'arrowRightAlt',
  'manageAccounts',
  'closeDetail',
  'done',
  'share',
  'chat',
  'attachFile',
  'arrowBackIcon',
  'driveFileMoveFill',
  'groupAvatar',
  'delete',
  'copy',
  'openInFull',
  'close',
  'accountTree',
  'apartment',
  'arrownDownward',
  'arrowRight',
  'arrowUpward',
  'badge',
  'businessCenter',
  'calendarMonth',
  'cameraIndoor',
  'contactPhone',
  'corporateFare',
  'chevronRight',
  'devices',
  'directionsBoat',
  'directionsBus',
  'directionsSubway',
  'driveFileRenameOutline',
  'emojiTransportation',
  'filterDrama',
  'filterList',
  'folderOpen',
  'handyman',
  'handshake',
  'inbox',
  'info',
  'leaderboard',
  'listAlt',
  'locationAway',
  'menu',
  'minorCrash',
  'moreVert',
  'notifications',
  'phoneForwarded',
  'policy',
  'print',
  'priorityHight',
  'reduceCapacity',
  'search',
  'security',
  'settingsAccessibility',
  'settings',
  'taskAlt',
  'water',
  'widgets',
  'workspacePremium',
  'badge',
  'security',
  'add',
  'print',
  'search',
  'folderOpenIcon',
  'folderSpecial',
  'folderZip',
  'iconLevelTaskGreen',
  'iconLevelTaskPurple',
  'iconLevelTask',
  'folderBlue',
  'folderGreen',
  'arrowDropDown',
  'contentPasteSearch',
  'topic',
  'download',
  'adds',
  'description',
  'moreHoriz',
  'descriptiona',
  'imagea',
  'uploadfile',
  'upload',
  'copya',
  'downloadfile',
  'delete',
  'male',
  'link',
  'shared',
  'password',
  'logout',
  'ellipse',
  'td',
  'ellipsea',
  'camera',
  'assignment',
  'range',
  'business',
  'rename',
  'arrowRight',
  'iconExpandMore',
  'deleteOutlined',
  'history',
  'photoCamera',
  'check',
  'remove',
  'avatarNoUser',
  'ducoments',
  'documanst',
  'photo',
  'danger',
  'word',
  'excel',
  'warning',
  'assignmentInd'
] as const

export type IconType = typeof IconNames[number]

type IconProps = {
  className?: string
  onClick?: () => void
  iconName: IconType
}

export const Icon: FC<IconProps> = (props) => {
  const { iconName, className, ...rest } = props
  const IconComponent = get(CustomIcons, iconName, Fragment)

  return (
    <span className={clsx(styledModule`root`, className)} {...rest}>
      <IconComponent />
    </span>
  )
}

export default memo(Icon, (prevProps, nextProps) => isEqual(prevProps, nextProps))
