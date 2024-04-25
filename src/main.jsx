import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layouts/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import EstateDetails from './pages/Home/Estatedetails/Estatedetails.jsx';
import Errorpage from './pages/Errorpage/Errorpage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider.jsx';
import AboutUs from './pages/About/AboutUs.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import Updateprofile from './pages/Updateprofile/Updateprofile.jsx';
import Userprofile from './pages/Userprofile/Userprofile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
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
        path: '/updateProfile',
        element: <Updateprofile></Updateprofile>,
      },
      {
        path: '/userProfile',
        element: (
          <PrivateRoutes>
            <Userprofile></Userprofile>
          </PrivateRoutes>
        ),
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
        path: '/aboutUs',
        element: (
          <PrivateRoutes>
            <AboutUs></AboutUs>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
