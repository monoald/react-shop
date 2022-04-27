// import React from 'react' // No need to import beacause of .babelrc config
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default App;