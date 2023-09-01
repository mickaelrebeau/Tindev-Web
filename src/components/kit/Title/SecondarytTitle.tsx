import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export function SecondaryTitle({ children, className }: Props) {
  return (
    <h2
      className={cn(
        'text-2xl md:text-3xl lg:text-4xl text-zinc-950 dark:text-zinc-50',
        className
      )}>
      {children}
    </h2>
  )
}
