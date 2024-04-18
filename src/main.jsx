import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layouts/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Estate from './pages/Home/Estate.jsx';
import EstateDetails from './pages/Home/Estatedetails/Estatedetails.jsx';
import Errorpage from './pages/Errorpage/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Fakedata.json'),
      },

      {
        path: '/estatedetails/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/Fakedata.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/errorpage',
        element: <Errorpage></Errorpage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
