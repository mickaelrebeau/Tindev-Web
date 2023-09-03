import React, { useRef } from 'react'
import { faker } from '@faker-js/faker'
import { messages } from '@/lib/data/messages'
import { formatDateWithTime, isSameDay } from '@/lib/methods/date'
import { DividerAuto } from './Divider'
import { Message } from './Message'

export function Chat() {
  const lastDate = useRef<Date | null>(null)
  const currentId = faker.number.int(1)

  return (
    <div className="w-full px-2 flex flex-col gap-4 h-[inherit] scrollbar-stable overflow-y-hidden round hover:overflow-y-auto scrollbar-w-3 scrollbar-rounded-track scrollbar-rounded-thumb scrollbar-shadow-track scrollbar-shadow-thumb">
      {messages.map((message) => {
        const isSameDateThanPrevious = lastDate.current
          ? isSameDay(lastDate.current, message.date)
          : false
        lastDate.current = message.date

        return (
          <React.Fragment key={message.id}>
            {!isSameDateThanPrevious && <DividerAuto date={message.date} />}

            <Message
              from={currentId === message.userId ? 'me' : 'him'}
              date={formatDateWithTime(message.date)}>
              {message.content}
            </Message>
          </React.Fragment>
        )
      })}
    </div>
  )
}
