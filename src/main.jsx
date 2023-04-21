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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
