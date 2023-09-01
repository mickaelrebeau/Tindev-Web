import { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export function FirstTitle({ children }: Props) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-7xl dark:text-zinc-50">
      {children}
    </h1>
  )
}
