import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ className?: string }>

export function TertiaryTitle({ children, className }: Props) {
  return (
    <h2
      className={cn(
        'text-xl md:text-2xl lg:text-3xl text-zinc-950 dark:text-zinc-50 inline-block',
        className
      )}>
      {children}
    </h2>
  )
}
