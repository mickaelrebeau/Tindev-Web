import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  date?: string
  from: 'me' | 'him'
}>

const styles = {
  him: {
    wrapper: 'justify-start',
    content: 'rounded-bl-none text-slate-800 bg-purple-300 border-purple-600',
    date: 'text-end',
  },
  me: {
    wrapper: 'justify-end',
    content: 'rounded-br-none text-slate-800 bg-indigo-300 border-indigo-600',
    date: 'text-start',
  },
}

export const Message = ({
  children,
  date = '01 aout 2023 22:22',
  from,
}: Props) => {
  return (
    <div className={cn('w-full flex', styles[from].wrapper)}>
      <div className={'max-w-[45%]'}>
        <p
          className={cn(
            'rounded-2xl py-2 px-4 border-2',
            styles[from].content
          )}>
          {children}
        </p>
        <p
          className={cn(
            'text-end text-slate-300 text-sm mt-1',
            styles[from].date
          )}>
          {date}
        </p>
      </div>
    </div>
  )
}
