// React/React Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Loaders
import { adsListLoader } from './pages/home'
import { valuesLoader } from './pages/about'
import { adLoader } from './pages/sheet'

// Components
import Error from './pages/error'
import Home from './pages/home'
import About from './pages/about'
import Sheet from './pages/sheet'
import Layout from './components/layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />,
        loader: adsListLoader,
      },
      {
        path: 'about',
        element: <About />,
        loader: valuesLoader,
      },
      {
        path: `sheet/:id`,
        element: <Sheet />,
        loader: adLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
