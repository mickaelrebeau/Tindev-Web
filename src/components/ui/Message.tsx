import { SecondaryTitle } from '../kit/Title/SecondarytTitle'
import { Paragraph } from '../kit/Utilitaries/Paragraph'

type Props = Message

export function Message({ id, userId, content, comments }: Props) {
  return (
    <>
      <SecondaryTitle>Message {userId}</SecondaryTitle>
      <Paragraph>{content}</Paragraph>

      {comments?.map((comment) => (
        <Message key={`${id}-${comment.id}`} {...comment} />
      ))}
    </>
  )
}
