import { PropsWithChildren } from 'react'
import { cn } from '@/lib/methods/utils'

type Props = PropsWithChildren<{ className?: string }>

export function FirstTitle({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'text-3xl dark:text-zinc-50 md:text-5xl lg:text-7xl',
        className
      )}>
      {children}
    </h1>
  )
}
