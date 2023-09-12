import { useQuery } from '@tanstack/react-query'
import * as Messages from '@/lib/api/messages'

export function useChannelsSummary(userId: User['id']) {
  return useQuery<ChannelSummary[], Error>(['channels-summary', userId], () =>
    Messages.getChannelsSummary(userId)
  )
}
