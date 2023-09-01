import { dict_network } from '@/lib/data/network'
import { assertsNotNull } from '@/lib/utils'

export function Network({ name, link }: Network) {
  const net = dict_network.find((dict) => dict.name === name)
  assertsNotNull(net)

  return (
    <a href={link} rel="noopener" className="">
      <svg
        viewBox="0 0 20 20"
        height={30}
        width={30}
        className="hover:fill-sky-600">
        <path d={net.icone}></path>
      </svg>
    </a>
  )
}
