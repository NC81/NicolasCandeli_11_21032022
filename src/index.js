// React/React Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
// Loaders
import { adsListLoader } from './pages/home/home'
import { principlesLoader } from './pages/about'
import { singleAdLoader } from './pages/sheet'
// Components
import Error from './pages/error'
import Home from './pages/home/home'
import About from './pages/about'
import Sheet from './pages/sheet'
import Layout from './layout/layout/layout'

// import '../sass/'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: 'home',
        element: <Home />,
        loader: adsListLoader,
      },
      {
        path: 'about',
        element: <About />,
        loader: principlesLoader,
      },
      {
        path: `sheet/:id`,
        element: <Sheet />,
        loader: singleAdLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
