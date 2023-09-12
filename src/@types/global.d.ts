import { dict_network } from '@/lib/data/network'

declare global {
  type NetworkName = (typeof dict_network)[number]['name']
  type Network = { name: NetworkName; link: string }

  type PropsWithClassname<T = unknown> = T & {
    className?: string
  }
}

export {}
