import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>>

export function Tag({ children, className, ...props }: Props) {
  return (
    <li
      className={cn(
        'text-sm md:text-base text-sky-600 border border-sky-600 rounded-full px-3 py-1 dark:text-zinc-200 dark:border-zinc-200 text-center list-none',
        className
      )}
      {...props}>
      {children}
    </li>
  )
}
