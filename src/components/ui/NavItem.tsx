import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/methods/utils'

type Props = PropsWithChildren<{
  to: string
}>

export function NavItem({ children, to: link }: Props) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        cn('menu-item cursor-pointer hover:text-gray-300', {
          'text-blue-500': isActive,
        })
      }>
      {children}
    </NavLink>
  )
}
