// React/React Router
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
// Loaders
import { adsListLoader } from './pages/home/home'
import { principlesLoader } from './pages/about/about'
import { singleAdLoader } from './pages/sheet/sheet'
// Pages/Layout
import Error from './pages/error/error'
import Home from './pages/home/home'
import About from './pages/about/about'
import Sheet from './pages/sheet/sheet'
import Layout from './layouts/layout/layout'
// Styles
import './styles/main.css'

// Configure routes
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

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
