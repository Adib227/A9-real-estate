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
import Userprofile from './pages/Userprofile/Userprofile.jsx';
import Updateprofile from './pages/Updateprofile/Updateprofile.jsx';
import { HelmetProvider } from 'react-helmet-async';

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
      // {
      //   path: '/userprofile',
      //   element: <Userprofile></Userprofile>,
      // },
      // {
      //   path: '/updateprofile',
      //   element: <Updateprofile></Updateprofile>,
      // },
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
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
