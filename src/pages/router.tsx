import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/App'
import { Home, Kit, Messages, Profile } from '@/pages'

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
        element: <Profile />,
      },
      {
        path: '/kit',
        element: <Kit />,
      },
    ],
  },
])
