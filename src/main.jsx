import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Watch from './pages/Watch/Watch.jsx'
import Anime from './pages/Anime/Anime.jsx'
import Homepage from './pages/Home/Homepage.jsx'
import Search from './pages/Search/Search.jsx'
import Completed from './pages/Completed/Completed.jsx'
import Ongoing from './pages/Ongoing/Ongoing.jsx'
import Error from './pages/Error/Error.jsx'
import Watchlist from './pages/Watchlist/Watchlist.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/watchlist',
        element: <Watchlist />
      },
      {
        path: '/anime/:id',
        element: <Anime />
      },
      {
        path: '/watch/:slug',
        element: <Watch />
      },
      {
        path: '/search/:value',
        element: <Search />
      },
      {
        path: '/completed/page/:page',
        element: <Completed />
      },
      {
        path: '/ongoing/page/:page',
        element: <Ongoing />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
