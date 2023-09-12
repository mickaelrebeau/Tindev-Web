import { Link } from 'react-router-dom'
import { cn } from '@/lib/methods/utils'
import { RiUserFacesUserSearchFill } from '../Icons'

type Props = PropsWithClassname

export function DiscoverNewMatches({ className }: Props) {
  return (
    <Link
      to="/discover"
      className={cn('group flex gap-3 bg-slate-800 p-3', className)}>
      <div className="grid place-content-center">
        <RiUserFacesUserSearchFill
          className="overflow-hidden rounded-full border-2 border-pink-700 p-2 text-pink-700 group-hover:shadow-[0_0_10px_3px_rgba(240,_46,_170,_0.7)]"
          size={4}
        />
      </div>
      <div>
        <h2>Discover New Matches</h2>
        <p>Start swiping to connect with nex people!</p>
      </div>
    </Link>
  )
}
