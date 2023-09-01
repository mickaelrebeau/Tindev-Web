import { cn } from '@/lib/utils'

type Props = {
  src: string
  className?: string
}

export function Avatar({ src, className }: Props) {
  return (
    <img
      className={cn(
        'w-10 h-10 border-2 border-white rounded-full dark:border-gray-800',
        className
      )}
      src={src}
      alt="Avatar"
    />
  )
}
