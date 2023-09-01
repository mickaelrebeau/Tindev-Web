import './App.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function App() {
  return (
    <>
      <NavBar />
      <div className="p-12 w-9/12 max-w-screen-xl m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
