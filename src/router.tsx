import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/App'
import { Index } from '@/pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
    ],
  },
])
