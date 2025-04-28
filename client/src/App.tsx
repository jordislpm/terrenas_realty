import React from 'react';
import './styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// import './lib/fixLeafletIcons'; 


//components
import Layout from './components/layout';
import Home from './pages/Home';
import ListPage from './pages/listPage';
import SinglePage from './pages/SinglePage';
import ProfilePage from 'pages/ProfilePage';

const App = () => {
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
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        }
      ]
    }
  ])
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
