import { ErrorMessage } from '@/components/utils/ErrorMessage'
import { getAge } from '@/lib/methods/date'
import { useUser } from '@/lib/queries/users'
import { SliderPhotos } from '../SliderPhotos'

type Props = {
  userId: string
}

export function MatchProfile({ userId }: Props) {
  const { isLoading, error, data: user } = useUser(userId)

  if (isLoading) return <div className="p-2">Loading...</div>
  if (error) return <ErrorMessage message={error.message} />

  return (
    <>
      <SliderPhotos photos={user.photos} />
      <main className="py-4">
        <h2 className="px-4">Forth, {getAge(new Date(2000, 1, 1))} ans</h2>
        <h3 className="px-4 text-slate-300">Développeur Web chez Tindev</h3>
        {/* TODO: Améliorer le height car très moche actuellement ! */}
        <p className="scrollbar-stable round scrollbar-w-2 scrollbar-rounded-track scrollbar-rounded-thumb scrollbar-shadow-track scrollbar-shadow-thumb scrollbar-bg-white scrollbar-opacity-30 h-[calc(100vh_-_60px_-_60px_-_300px_-_165px)] overflow-y-hidden px-4 py-2 hover:overflow-y-auto">
          {user.bio}
        </p>
      </main>
    </>
  )
}
