import { Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '@/components/layout'
import { cn } from '@/lib/utils'

export function App() {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {/* TODO: Mettre ca directement sur section */}
      <div id="background"></div>
      <section
        className={cn('text-slate-100 h-[calc(100vh_-_60px_-_60px)]', {
          'p-12 w-9/12 max-w-screen-xl m-auto overflow-auto':
            pathname !== '/messages',
        })}>
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}
