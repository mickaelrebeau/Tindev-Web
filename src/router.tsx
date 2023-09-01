import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/App'
import { Home } from '@/pages/home'
import { Kit } from '@/pages/kit'
import { Profil } from './pages/profil'
import { Messages } from './pages/messages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/profil',
        element: <Profil />,
      },
      {
        path: '/kit',
        element: <Kit />,
      },
    ],
  },
])
