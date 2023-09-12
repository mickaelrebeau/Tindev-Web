import { ErrorMessage } from '@/components/utils/ErrorMessage'
import { useUserContext } from '@/lib/hooks/useUserContext'
import { useChannelsSummary } from '@/lib/queries/messages'
import { BoxMessage } from './BoxMessage'

export function ListMessages() {
  const { id: userId } = useUserContext()
  const { isLoading, error, data: channels } = useChannelsSummary(userId)

  if (isLoading) return <div className="p-2">Loading...</div>
  if (error) return <ErrorMessage message={error.message} />

  return (
    <div className="scrollbar-stable scrollbar-w-3 scrollbar-rounded-track scrollbar-rounded-thumb scrollbar-shadow-track scrollbar-shadow-thumb scrollbar-bg-black scrollbar-opacity-30 h-[calc(100%_-_90px)] overflow-y-hidden hover:overflow-y-auto">
      <h2 className="px-4 pt-4 text-pink-500">Messages</h2>
      {/* // TODO: Virer i */}
      {channels.map((channel, i) => (
        <BoxMessage key={i} {...channel} />
      ))}
    </div>
  )
}
