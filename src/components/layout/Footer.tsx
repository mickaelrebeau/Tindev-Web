import { cn } from '@/lib/methods/utils'

type Props = {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <>
      <footer
        className={cn('h-[60px] bg-gray-900 px-4 py-4 text-white', className)}>
        <p>Projet de Mike, Nora et Rayn</p>
      </footer>
    </>
  )
}
