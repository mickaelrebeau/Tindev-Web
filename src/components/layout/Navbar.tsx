import { DiCodeigniter } from 'react-icons/di'
import { NavItem } from '../ui/NavItem'

export function NavBar() {
  return (
    <div className="bg-gray-900 text-white py-3 px-4 flex items-center gap-4 h-15">
      <div className="">
        <DiCodeigniter />
        {/* <img src="logo.png" alt="Logo" className="w-8 h-8" /> */}
      </div>

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
