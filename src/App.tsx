import './App.css'
import { Outlet } from 'react-router-dom'
import { AppNavBar } from '@/components/navbar/app-navbar'
import { AppFooter } from '@/components/footer/app-footer'

export function App() {
  return (
    <>
      <AppNavBar />
      <h1>Tindev</h1>
      <div className="p-12 w-9/12 max-w-screen-xl m-auto">
        <Outlet />
      </div>
      <AppFooter />
    </>
  )
}
