import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import HomeContent from './Public Pages/HomeContent';
import Home from './Static Contents/Home';
import Faq from './Public Pages/Faq';
import Contact from './Public Pages/Contact';
import AboutUs from './Public Pages/AboutUs';
import Features from './Public Pages/Features';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home> , 
    children: [
      {
        index: true,
        element:<HomeContent></HomeContent>,
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
        path: 'Features',
        element: <Features />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);