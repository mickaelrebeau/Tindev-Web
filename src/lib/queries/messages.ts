import { useQuery } from '@tanstack/react-query'
import * as Messages from '@/lib/api/messages'

export function useChannelsSummary(userId: User['id']) {
  return useQuery<ChannelSummary[], Error>(['user', userId], () =>
    Messages.getChannelsSummary(userId)
  )
}
