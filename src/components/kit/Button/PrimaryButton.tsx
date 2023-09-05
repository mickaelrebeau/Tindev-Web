import { cn } from '@/lib/utils'
import Button, { ButtonProps } from './Button'

export function PrimaryButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        'bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 px-4 text-zinc-50 hover:contrast-75 dark:text-zinc-950 hover:dark:contrast-150',
        className
      )}
      {...props}>
      {children}
    </Button>
  )
}
