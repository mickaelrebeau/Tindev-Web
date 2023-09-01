import { DiCodeigniter } from 'react-icons/di'

export function NavBar() {
  return (
    <>
      <div className="navbar bg-gray-900 text-white py-3 px-4 flex items-center">
        <div className="logo">
          <DiCodeigniter />
          {/* <img src="logo.png" alt="Logo" className="w-8 h-8" /> */}
        </div>
        <div className={`menu md:flex md:gap-6`}>
          <div className="menu-item cursor-pointer hover:text-gray-300">
            Accueil
          </div>
          <div className="menu-item cursor-pointer hover:text-gray-300">
            Equipes
          </div>
        </div>
        <div className={`menu-button md:hidden}`}>
          <div className="menu-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </>
  )
}
