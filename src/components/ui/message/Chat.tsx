import React, { useRef } from 'react'
import { faker } from '@faker-js/faker'
import { ScrollToBottom } from '@/components/utils/ScrollToBottom'
import { messages } from '@/lib/data/messages'
import { formatDateWithTime, isSameDay } from '@/lib/methods/date'
import { DividerAuto } from './Divider'
import { Message } from './Message'

export function Chat() {
  const lastDate = useRef<Date | null>(null)
  const currentId = faker.number.int(1)

  return (
    <div className="scrollbar-stable round scrollbar-w-3 scrollbar-rounded-track scrollbar-rounded-thumb scrollbar-shadow-track scrollbar-shadow-thumb scrollbar-bg-black scrollbar-opacity-30 flex h-[inherit] w-full flex-col gap-4 overflow-y-hidden px-2 hover:overflow-y-auto">
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
      <ScrollToBottom deps={messages} />
    </div>
  )
}
