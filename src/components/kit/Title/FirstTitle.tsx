import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export function FirstTitle({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'text-3xl md:text-5xl lg:text-7xl dark:text-zinc-50',
        className
      )}>
      {children}
    </h1>
  )
}
