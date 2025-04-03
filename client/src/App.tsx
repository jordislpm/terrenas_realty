import React from 'react';
// import './styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

//components
import Layout from './components/layout';
import Home from './pages/Home';
import ListPage from './pages/listPage';
import SinglePage from './pages/SinglePage';

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
