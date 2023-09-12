import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { router } from '@/pages/router'
import { queryClient } from '@/lib/queryClient.config'
import { UserProvider } from './contexts/UserProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider
        user={{
          id: '8b2c254a-d56c-4ca8-b4e9-378a4c400e68',
          name: 'Forth',
          username: 'Forth',
          avatar: 'https://avatars.githubusercontent.com/u/33458877?s=96&v=4',
          jobTitle: 'Développeur Web chez Tindev',
          photos: [],
          bio: "La Forth est avec moi, rien qu'avec moi ! Du moins, si on peut appeler la sueur de la force !",
          birthday: new Date(1986, 11, 26, 6, 10, 42),
        }}>
        <RouterProvider router={router} />
      </UserProvider>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
)
