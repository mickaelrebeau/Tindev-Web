type Message = {
  id: number
  channelId: number
  userId: number
  content: string
  createdAt: string
  deletedAt: string
}

type Channel = {
  id: number
  userId1: number
  userId2: number
  isActive?: boolean // ???
  createdAt: string
}

// type ChannelSummary = {
//   // avatar: string
//   // username: string
//   userId: User['id']
//   newNotification: boolean
//   superLike: boolean
//   lastMessage?: string
// }

type ChannelSummaryDefaultProps = {
  // avatar: string
  // username: string
  userId: User['id']
}

type ChannelSummaryNewMatch = ChannelSummaryDefaultProps & {
  newNotification: true
  superLike?: boolean
  lastMessage?: undefined
}

type ChannelSummaryNewMessage = ChannelSummaryDefaultProps & {
  newNotification: true
  superLike?: false
  lastMessage: string
}

type ChannelSummaryOldMessage = ChannelSummaryDefaultProps & {
  newNotification: false
  superLike?: false
  lastMessage: string
}

type ChannelSummary =
  | ChannelSummaryNewMatch
  | ChannelSummaryNewMessage
  | ChannelSummaryOldMessage
