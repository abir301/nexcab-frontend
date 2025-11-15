import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { store } from './redux/store';
import { AuthProvider } from './context/AuthContext';
import HomeContent from './Home Content/HomeContent';
import Home from './Static Contents/Home';
import Faq from './Public Pages/Faq';
import Contact from './Public Pages/Contact';
import AboutUs from './Public Pages/AboutUs';
import Features from './Public Pages/Features';
import { Login } from './Public Pages/Login';
import { Register } from './Public Pages/Register';
import Blocked from './status/Blocked';
import Suspended from './status/Suspended';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <HomeContent></HomeContent>,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'login',
        element: <Login />,
      },       
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/status/blocked',
    element: <Blocked />,
  },
  {
    path: '/status/suspended',
    element: <Suspended />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
);