import { useEffect, useRef } from 'react'

type Props = { deps?: React.DependencyList | undefined }

export function ScrollToBottom({ deps }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView()
  }, [deps])

  return <div ref={ref} />
}
