import { SecondaryTitle } from '@/components/kit/Title/SecondarytTitle'
import { Message } from '@/components/ui/Message'
import { messages2 } from '@/lib/data/messages'

export function Messages() {
  return (
    <section className="text-slate-100">
      <SecondaryTitle>Messages</SecondaryTitle>

      {messages2.map((message) => (
        <Message key={message.id} {...message} id={message.id} />
      ))}
    </section>
  )
}
