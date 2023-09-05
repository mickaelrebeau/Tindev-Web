import { Outlet, useLocation } from 'react-router-dom'
import { Footer, NavBar } from '@/components/layout'
import { cn } from '@/lib/methods/utils'

export function App() {
  const { pathname } = useLocation()

  return (
    <div className="flex h-screen flex-col">
      <NavBar className="flex-initial" />
      {/* TODO: Mettre ca directement sur section */}
      <div id="background"></div>
      <section
        className={cn(
          'h-[calc(100vh_-_60px_-_60px)] flex-auto text-slate-100',
          {
            // className={cn('text-slate-100 flex-auto', {
            'm-auto w-9/12 max-w-screen-xl overflow-auto p-12':
              pathname !== '/messages',
          }
        )}>
        <Outlet />
      </section>
      <Footer className="flex-initial" />
    </div>
  )
}
