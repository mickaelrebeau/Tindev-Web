import { PropsWithChildren } from 'react'
import { cn } from '@/lib/methods/utils'

type Props = PropsWithChildren<{ className?: string }>

export function Paragraph({ children, className }: Props) {
  return (
    <p
      className={cn(
        'my-3 text-justify text-sm text-zinc-700 dark:text-zinc-200 md:text-base',
        className
      )}>
      {children}
    </p>
  )
}
