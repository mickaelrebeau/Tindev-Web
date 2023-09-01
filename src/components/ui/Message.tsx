import { users } from '@/lib/data/users'
import { Paragraph } from '../kit/Utilitaries/Paragraph'
import { assertsNotNull } from '@/lib/utils'
import { Avatar } from './Avatar'
import { TertiaryTitle } from '../kit/Title/TertiaryTitle'

type Props = Message2

export function Message({ id, userId, content, comments }: Props) {
  const user = getUser(userId)
  return (
    <>
      <header className="flex items-center gap-2">
        <Avatar src={user.avatar} className="inline-block" />
        <TertiaryTitle>Message {user.name}</TertiaryTitle>
      </header>
      <Paragraph>{content}</Paragraph>

      {comments?.map((comment, index) => (
        <Message key={id * 1000 + index} {...comment} id={id * 1000 + index} />
      ))}
    </>
  )
}

function getUser(id: number) {
  const user = users.find((user) => user.id === id)
  assertsNotNull(user)

  return user
}
