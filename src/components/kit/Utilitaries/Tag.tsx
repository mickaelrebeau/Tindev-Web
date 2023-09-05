import { PropsWithChildren } from 'react'
import { cn } from '@/lib/methods/utils'

type Props = PropsWithChildren<React.LiHTMLAttributes<HTMLLIElement>>

export function Tag({ children, className, ...props }: Props) {
  return (
    <li
      className={cn(
        'inline-block w-fit list-none rounded-full border border-sky-600 px-3 py-1 text-center text-sm text-sky-600 dark:border-zinc-200 dark:text-zinc-200 md:text-base',
        className
      )}
      {...props}>
      {children}
    </li>
  )
}
