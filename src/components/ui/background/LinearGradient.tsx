import { cn } from '@/lib/methods/utils'

//? Version avec string, sans controle de la classe from-color et to-color

type Props = {
  from: `from-${string}`
  to: `to-${string}`
  className?: string
}

export function LinearGradient({ from, to, className }: Props) {
  return (
    <div
      className={cn(
        'absolute overflow-hidden bg-gradient-to-b blur-[150px]',
        // 'absolute -z-1 h-full w-full bg-gradient-to-b blur-[150px] overflow-hidden',
        from,
        to,
        className
      )}
    />
  )
}

export function LinearGradientBlueToPink() {
  return (
    <LinearGradient
      from="from-[#00c2ff]"
      to="to-[#ff29c3]"
      className="left-2/3 top-1/3 max-h-[780px] min-h-[calc(100vh-50vh)] min-w-[calc(100vw-50vw)] max-w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full  blur-[150px] md:min-h-[780px] md:min-w-[780px]"
    />
  )
}

export function LinearGradientBlueToBlue() {
  return (
    <LinearGradient
      from="from-[#184bff]"
      to="to-[#174aff]"
      className="left-1/3 top-1/2 max-h-[560px] max-w-[394px] -translate-x-1/2 translate-y-1/2 opacity-100 blur-[150px] lg:translate-y-1/3"
    />
  )
}
