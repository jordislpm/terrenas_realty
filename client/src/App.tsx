import React, { lazy, Suspense } from 'react';
import './styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// import './lib/fixLeafletIcons'; 


//components

import Home from './pages/Home';
import ListPage from './pages/listPage';
//import SinglePage from './pages/SinglePage';
import ProfilePage from 'pages/ProfilePage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import HomeImageSection from 'components/share/HomeImageSection';
import { Layout, RequireAuth } from 'components/layout';
import ProfileUpdatePage from 'pages/ProfileUpdatePage';
import NewPostPage from 'pages/NewPostPage';
import ErrorPage from 'components/share/ErrorPage';
import { postLoader } from 'loaders/postLoader';
import { listLoader } from 'loaders/listLoader';
import { profilePageLoader } from 'loaders/profilePageLoader';
import Loading from 'components/share/Loading';
import About from './pages/About';
import Agents from './pages/Agents';
import Contact from './pages/Contact';
import RegisterAgent from './pages/RegisterAgent';



const App = () => {

  const SinglePage = lazy(() => import('./pages/SinglePage'));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/agents",
          element: <Agents />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listLoader,
          errorElement: <ErrorPage />
        },
        {
          path: "/post/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <SinglePage />
            </Suspense>
          ),
          loader: postLoader,
          errorElement: <ErrorPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/registerAgent",
          element: <RegisterAgent />
        }
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
          errorElement: <ErrorPage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />
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
