import { cn } from '@/lib/utils'
import logo from '@/assets/logo.png'
import { NavItem } from '../ui/NavItem'

type Props = {
  className?: string
}

export function NavBar({ className }: Props) {
  return (
    <div
      className={cn(
        'bg-gray-900 text-white py-3 px-4 flex items-center gap-4 h-15',
        className
      )}>
      <img src={logo} alt="Logo" className="h-10 -mt-2" />

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
