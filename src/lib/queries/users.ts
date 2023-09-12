import { useQuery } from '@tanstack/react-query'
import * as Users from '@/lib/api/users'

export function useUser(userId: User['id']) {
  return useQuery<User, Error>(['user', userId], () => Users.getUser(userId))
}
