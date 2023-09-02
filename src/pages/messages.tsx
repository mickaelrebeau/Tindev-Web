import React, { useRef } from 'react'
import { faker } from '@faker-js/faker'
import { DividerAuto } from '@/components/ui/message/Divider'
import { Message } from '@/components/ui/message/Message'
import { messages } from '@/lib/data/messages'
import { formatDateWithTime, isSameDay } from '@/lib/methods/date'

// TODO : Ajouter le choix de la couleur des messages  a l'utilisateur
// TODO : WEB SOCKET
// TODO : Mettre les messages en cache ?
// TODO : Ajouter le darkmode
// TODO : Ajouter les reaction + les emojis

// prendre en charge le code

export function Messages() {
  const lastDate = useRef<Date | null>(null)
  const currentId = faker.number.int(1)

  return (
    <>
      <div className="min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] max-h-[780px] w-full h-full md:min-h-[780px] md:min-w-[780px] rounded-full absolute top-1/3 -z-1 gradient-1 blur-[150px] -translate-y-1/2 -translate-x-1/2 left-2/3" />
      <div className="w-full h-full max-w-[394px] max-h-[560px] gradient-2 absolute top-1/2 -translate-x-1/2 left-1/3 opacity-100 blur-[150px] translate-y-1/2 lg:translate-y-1/3 -z-1" />
      {/* TODO: Remove `pb-20` */}
      {/* <div className="grid grid-cols-messages grid-rows-messages divide-x-2 h-[calc(100vh-6rem)] overflow-hidden"> */}
      <div className="grid grid-cols-messages grid-rows-messages h-[inherit]">
        <div className="row-start-1 row-end-2 col-start-1 col-end-2">
          Profile
        </div>
        <div className="row-start-2 row-end-3 col-start-1 col-end-2">
          Discover
        </div>
        <div className="row-start-3 row-end-4 col-start-1 col-end-2">
          Messages
        </div>
        <div className="row-start-1 row-end-4 col-start-2 col-end-3 border-l-2 border-r-2 overflow-auto">
          {/* <div className="w-full h-full overflow-auto px-2 flex flex-col gap-4"> */}
          <div className="w-full px-2 flex flex-col gap-4">
            {messages.map((message) => {
              const isSameDateThanPrevious = lastDate.current
                ? isSameDay(lastDate.current, message.date)
                : false
              lastDate.current = message.date

              return (
                <React.Fragment key={message.id}>
                  {!isSameDateThanPrevious && (
                    <DividerAuto date={message.date} />
                  )}

                  <Message
                    from={currentId === message.userId ? 'me' : 'him'}
                    date={formatDateWithTime(message.date)}>
                    {message.content}
                  </Message>
                </React.Fragment>
              )
            })}
          </div>
        </div>
        <div className="row-start-1 row-end-4 col-start-3 col-end-4">
          MatchProfile
        </div>
      </div>
    </>
  )
}
