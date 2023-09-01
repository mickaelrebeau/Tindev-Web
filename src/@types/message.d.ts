type Message = {
  id: number
  userId: number
  content: string
  comments?: Message[]
}

type Message2 = {
  id: number
  userId: number
  date: string
  content: string
  comments?: Omit<Message2, 'id' | 'comments'>[]
}
