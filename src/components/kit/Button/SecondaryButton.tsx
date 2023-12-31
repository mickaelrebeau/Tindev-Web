import { cn } from '@/lib/methods/utils'
import Button, { ButtonProps } from './Button'

export function SecondaryButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={cn(
        'border border-sky-600 bg-zinc-50 text-sky-600 hover:bg-sky-600 hover:text-zinc-50 dark:bg-zinc-950 hover:dark:text-zinc-950',
        className
      )}
      {...props}>
      {children}
    </Button>
  )
}
