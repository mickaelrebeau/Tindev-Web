import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <>
      <footer
        className={cn('h-15 bg-gray-900 px-4 py-4 text-white', className)}>
        <p>Projet de Mike, Nora et Rayn</p>
      </footer>
    </>
  )
}
