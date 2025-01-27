import React from 'react';
import './styles/App.scss';

//components
import Layout from './components/layout';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
};

export default App;
