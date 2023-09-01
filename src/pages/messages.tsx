// import { SecondaryTitle } from '@/components/kit/Title/SecondarytTitle'
// import { Message } from '@/components/ui/Message'
// import { messages2 } from '@/lib/data/messages'

export function Messages() {
  return (
    <section className="text-slate-100">
      {/* <SecondaryTitle className="mb-3">Messages</SecondaryTitle>

      {messages2.map((message) => (
        <Message key={message.id} {...message} id={message.id} />
      ))} */}

      <div className="grid grid-cols-messages grid-rows-messages divide-x-2">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          Profile
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2">
          Discover
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2">
          Messages
        </div>
        <div className="row-start-1 row-end-4 col-start-2 col-end-3">
          Channel
        </div>
        <div className="row-start-1 row-end-4 col-start-3 col-end-4">
          MatchProfile
        </div>
      </div>
    </section>
  )
}
