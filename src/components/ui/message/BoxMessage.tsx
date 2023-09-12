import { ErrorMessage } from '@/components/utils/ErrorMessage'
import { cn } from '@/lib/methods/utils'
import { useUser } from '@/lib/queries/users'
import { Avatar } from '../avatar/Avatar'
import { AiFillStar, FaSolidArrowTurnUp } from '../Icons'

type Props = ChannelSummary

export function BoxMessage({
  userId,
  newNotification,
  superLike,
  lastMessage,
}: Props) {
  const { isLoading, error, data: user } = useUser(userId)

  if (isLoading) return <div className="p-2">Loading...</div>
  if (error) return <ErrorMessage message={error.message} />

  return (
    <article className="flex gap-4 p-4">
      <aside className="relative">
        <Avatar src={user.avatar} className="h-20 w-20" />
        {newNotification && (
          <span className="absolute left-14 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-pink-500 dark:border-gray-800" />
        )}
      </aside>
      <main className="flex w-[calc(100%_-_5rem_-_1rem)] flex-col justify-evenly">
        <header className="flex items-center gap-3">
          <h2>{user.username}</h2>
          {superLike && <AiFillStar className="text-blue-500" />}
        </header>
        <p className="flex items-center gap-2">
          {!newNotification && (
            <FaSolidArrowTurnUp className="inline-block -rotate-90" />
          )}
          <span
            className={cn('truncate', {
              'w-[calc(100%_-_1em_-_.5rem)]': !newNotification,
            })}>
            {lastMessage ?? 'Nouvelle correspondance ! Dîtes Bonjour 🖐'}
          </span>
        </p>
      </main>
    </article>
  )
}
