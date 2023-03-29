import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import adsList from './data/ads.json'
import Error from './pages/error'
import Home from './pages/home'
import About from './pages/about'
import Sheet from './pages/sheet'
import Layout from './components/layout'

function rootLoader() {
  const data = adsList
  return { data }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: rootLoader,
    errorElement: <Error />,
    children: [
      {
        path: 'home',
        element: <Home />,
        loader: rootLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: `sheet/:id`,
        element: <Sheet />,
        loader: rootLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
