import React from 'react'
import Layout from './layout.jsx'
import { RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>, 
    children: [
      {
        path: "",
        element: <home/>
      }, 
      { 
        path: "about",
        element: <about/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
