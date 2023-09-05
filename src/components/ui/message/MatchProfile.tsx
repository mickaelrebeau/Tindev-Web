import { useEffect, useState } from 'react'
import { ErrorMessage } from '@/components/utils/ErrorMessage'
import { getUser } from '@/lib/api/users'
import { getAge } from '@/lib/methods/date'
import { SliderPhotos } from '../SliderPhotos'

type Props = {
  userId: string
}

export function MatchProfile({ userId }: Props) {
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await getUser(userId)
        setUser(res)
      } catch (err) {
        if (typeof err === 'string') {
          console.error(err)
          setError(err)
        }
      }
    }
    loadUser()
  }, [userId])

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!user) {
    return <div className="p-2">Loading...</div>
  }

  return (
    <>
      {/* photos */}
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
