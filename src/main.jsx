import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.scss'
import HomePage from './pages/Home/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SingleProductPage from './pages/SingleProduct/SingleProductPage';
import AboutPage from './pages/About/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/shop',
        element: <ShopPage/>
      },
      {
        path:'/shop/:productId',
        element: <SingleProductPage/>
      },
      {
        path:'/about',
        element: <AboutPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
