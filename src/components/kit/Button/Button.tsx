import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

export default function Button({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn('m-4 w-fit rounded-md px-3 py-2 text-lg', className)}
      type={type}
      {...props}>
      {children}
    </button>
  )
}
