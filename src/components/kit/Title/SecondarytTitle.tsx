import { PropsWithChildren } from 'react'
import { cn } from '@/lib/methods/utils'

type Props = PropsWithChildren<{ className?: string }>

export function SecondaryTitle({ children, className }: Props) {
  return (
    <h2
      className={cn(
        'text-2xl text-zinc-950 dark:text-zinc-50 md:text-3xl lg:text-4xl',
        className
      )}>
      {children}
    </h2>
  )
}
