import { cn } from '@/lib/methods/utils'

type Props = {
  src: string
  className?: string
}

export function Avatar({ src, className }: Props) {
  return (
    <img
      className={cn(
        'h-10 w-10 rounded-full border-2 border-white dark:border-gray-800',
        className
      )}
      src={src}
      alt="Avatar"
    />
  )
}
