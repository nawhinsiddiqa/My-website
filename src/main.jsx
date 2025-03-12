import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import App from './App.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/skills',
        element:<Skills></Skills>,
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
