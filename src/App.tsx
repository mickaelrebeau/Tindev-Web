import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { NavBar, Footer } from '@/components/layout'
import { cn } from './lib/utils'

export function App() {
  const { pathname } = useLocation()

  return (
    <>
      <NavBar />
      <div
        className={cn({
          'p-12 w-9/12 max-w-screen-xl m-auto': pathname !== '/messages',
        })}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
