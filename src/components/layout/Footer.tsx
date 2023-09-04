import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function Footer({ className }: Props) {
  return (
    <>
      <footer
        className={cn('bg-gray-900 text-white py-4 px-4 h-15', className)}>
        <p>Projet de Mike, Nora et Rayn</p>
      </footer>
    </>
  )
}
