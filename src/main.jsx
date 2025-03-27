import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout.jsx"
import Home from './components/Home.jsx'

import HackathonGallery from './components/HackathonGallery.jsx'

const browserRouterObj = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/gallery",
        element: <HackathonGallery/>
      }
    ]
    

  }
    
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={browserRouterObj} />
  </StrictMode>,
)
