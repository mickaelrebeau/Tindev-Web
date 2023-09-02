import { Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '@/components/layout'
import { cn } from '@/lib/utils'

export function App() {
  const { pathname } = useLocation()

  return (
    <>
      <NavBar />
      <div
        className={cn('pt-14', {
          'p-12 w-9/12 max-w-screen-xl m-auto': pathname !== '/messages',
        })}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
