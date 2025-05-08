import React from 'react';
import './styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// import './lib/fixLeafletIcons'; 


//components

import Home from './pages/Home';
import ListPage from './pages/listPage';
import SinglePage from './pages/SinglePage';
import ProfilePage from 'pages/ProfilePage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import HomeImageSection from 'components/share/HomeImageSection';
import { Layout, RequireAuth  } from 'components/layout';
import ProfileUpdatePage from 'pages/ProfileUpdatePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Layout>
        <Home/>
      </Layout> */}
    </div>
  );
};

export default App;
