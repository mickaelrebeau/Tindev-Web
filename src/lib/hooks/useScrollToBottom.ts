import { useEffect } from 'react'

const useScrollToBottom = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
  }, [ref])
}

export default useScrollToBottom
