import { dict_network } from '@/lib/data/network'

export function Network({ name, link }: Network) {
  const net = dict_network.find((dict) => dict.name === name)

  if (!net) {
    return <>Network {name} not found</>
  }

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
