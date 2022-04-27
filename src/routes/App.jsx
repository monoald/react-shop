import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='recovery-password' element={<RecoveryPassword/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </Switch>
    </BrowserRouter>
  )
}

export default App;