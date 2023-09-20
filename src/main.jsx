import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import MainLayout from './LayOut/MainLayout/MainLayout';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Reviews from './components/Reviews/Reviews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirt.json')
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      },
      {
        path: 'reviews',
        element: <Reviews></Reviews>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router}></RouterProvider>
     </div>
  </React.StrictMode>,
)
