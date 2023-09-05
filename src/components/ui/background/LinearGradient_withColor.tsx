import { assertsHexaColors } from '@/lib/methods/string'
import { cn } from '@/lib/utils'

//? Version avec Color qui controle la classe from-color et to-color
// Selon moi, la version avec string est mieux !

type Props = {
  from: `from-${Color}`
  to: `to-${Color}`
  className?: string
}

export function LinearGradient({ from, to, className }: Props) {
  return (
    <div
      className={cn(
        'absolute -z-1 h-full w-full bg-gradient-to-b blur-[150px]',
        from,
        to,
        className
      )}
    />
  )
}
export function LinearGradientBlueToPink() {
  const colors = {
    from: '#00c2ff',
    to: '#ff29c3',
  }
  assertsHexaColors(colors)
  return (
    <LinearGradient
      from={`from-[${colors.from}]`}
      to={`to-[${colors.to}]`}
      className="left-2/3 top-1/3 max-h-[780px] min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full  blur-[150px] md:min-h-[780px] md:min-w-[780px]"
    />
  )
}
export function LinearGradientBlueToBlue() {
  const colors = {
    from: '#184bff',
    to: '#174aff',
  }
  assertsHexaColors(colors)
  return (
    <LinearGradient
      from={`from-[${colors.from}]`}
      to={`to-[${colors.to}]`}
      className="left-1/3 top-1/2 max-h-[560px] max-w-[394px] -translate-x-1/2 translate-y-1/2 opacity-100 blur-[150px] lg:translate-y-1/3"
    />
  )
}
