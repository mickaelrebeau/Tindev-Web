import { cn } from '@/lib/methods/utils'
import logo from '@/assets/logo.png'
import { NavItem } from '../ui/NavItem'

type Props = {
  className?: string
}

export function NavBar({ className }: Props) {
  return (
    <div
      className={cn(
        'flex h-[60px] items-center gap-4 bg-gray-900 px-4 py-3 text-white',
        className
      )}>
      <img src={logo} alt="Logo" className="-mt-2 h-10" />

      <nav className="md:flex md:gap-6">
        <NavItem to="/">Accueil</NavItem>
        <NavItem to="/messages">Messages</NavItem>
        <NavItem to="/profil">Profil</NavItem>
        <NavItem to="/kit">Kit</NavItem>
      </nav>

      <div className="md:hidden">
        <div className="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  )
}
