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
import NewPostPage from 'pages/NewPostPage';
import { postLoader } from 'services/loader/postLoader';
import ErrorPage from 'components/share/ErrorPage';

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
          path:"/post/:id",
          element:<SinglePage/>,
          loader: postLoader,
           errorElement: <ErrorPage/>
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
        {
          path:"/add",
          element:<NewPostPage/>
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
