import { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type Props = PropsWithChildren<{ className?: string }>

export function TertiaryTitle({ children, className }: Props) {
  return (
    <h2
      className={cn(
        'inline-block text-xl text-zinc-950 dark:text-zinc-50 md:text-2xl lg:text-3xl',
        className
      )}>
      {children}
    </h2>
  )
}
