import { cn } from '@/lib/utils'
import Button, { ButtonProps } from './Button'

export function TertiaryButton({ children, className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        'border border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-zinc-50 dark:border-zinc-50 dark:bg-zinc-950 dark:text-zinc-50 hover:dark:bg-zinc-50 hover:dark:text-zinc-950',
        className
      )}
      {...props}>
      {children}
    </Button>
  )
}
