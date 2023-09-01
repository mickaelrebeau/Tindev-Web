// type Message = {
//   id: number
//   userId: number
//   content: string
//   comments?: Message[]
// }

type Message2 = {
  id: number
  userId: number
  date: string
  content: string
  comments?: Omit<Message2, 'id' | 'comments'>[]
}

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
