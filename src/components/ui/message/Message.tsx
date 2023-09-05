import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type Props = PropsWithChildren<{
  date?: string
  from: 'me' | 'him'
}>

const styles = {
  him: {
    wrapper: 'justify-start',
    content: 'rounded-bl-none bg-purple-300 border-purple-600',
    date: 'text-start',
  },
  me: {
    wrapper: 'justify-end',
    content: 'rounded-br-none bg-indigo-300 border-indigo-600',
    date: 'text-end',
  },
}

export const Message = ({ children, date, from }: Props) => {
  return (
    <div className={cn('flex w-full', styles[from].wrapper)}>
      <div className={'max-w-[75%]'}>
        <p
          className={cn(
            'rounded-2xl border-2 px-4 py-2 text-slate-800',
            styles[from].content
          )}>
          {children}
        </p>
        <p
          className={cn(
            'mt-1 text-end text-sm text-slate-300',
            styles[from].date
          )}>
          {date}
        </p>
      </div>
    </div>
  )
}
