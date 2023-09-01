import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn('text-lg w-fit px-3 py-2 m-4 rounded-md', className)}
      {...props}>
      {children}
    </button>
  )
}
