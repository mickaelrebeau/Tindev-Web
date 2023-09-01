import { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export function SecondaryTitle({ children }: Props) {
  return (
    <h2
      className="text-2xl md:text-3xl lg:text-4xl
        6xl text-zinc-950 dark:text-zinc-50">
      {children}
    </h2>
  )
}
