type Message = {
  id: number
  userId: number
  content: string
  comments?: Message[]
}
