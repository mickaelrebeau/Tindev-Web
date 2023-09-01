import { SecondaryTitle } from '@/components/kit/Title/SecondarytTitle'
import { Message } from '@/components/ui/Message'
import { messages } from '@/lib/data/messages'

export function Messages() {
  return (
    <section className="text-slate-100">
      <SecondaryTitle>Messages</SecondaryTitle>

      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </section>
  )
}
