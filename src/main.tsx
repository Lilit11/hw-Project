import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
<<<<<<< HEAD
import { Profile } from './pages/Profile/dashboard'
import { Layout } from './pages/Profile/Layout'
import { Photos } from './pages/Profile/photos'
import { Settings } from './pages/Profile/settings'
import { Search } from './pages/Profile/search'
import { Account } from './pages/Profile/account'
import { Requests } from './pages/Profile/requests'
=======
import { Profile } from './pages/Profile/Dashboard'
import { Layout } from './pages/Profile/Layout'
import { Photos } from './pages/Profile/Photos'
import { Settings } from './pages/Profile/Settings'
>>>>>>> 5e7dac83b9a65d709ba21ee515199ed0e4fd3d11

const routes = createBrowserRouter([
  {
    path:'',
    element:<Signup/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
<<<<<<< HEAD
    path: '/profile',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Profile />
      },
      {
        path: 'albums',
        element: <Photos />
      },
      {
        path: 'settings',
        element: <Settings />
      },
      {
        path:'search',
        element:<Search/>
      },
      {
        path:':id',
        element:<Account/>
      },
      {
        path:'requests',
        element:<Requests/>
      }
=======
    path:'/profile',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Profile/>
      },
      {
        path:'albums',
        element:<Photos/>
      },
      {
        path:'settings',
        element:<Settings/>
      }

>>>>>>> 5e7dac83b9a65d709ba21ee515199ed0e4fd3d11
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider  router={routes}>
    </RouterProvider>
  </StrictMode>,
)
