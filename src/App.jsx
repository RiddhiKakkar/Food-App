import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='container'>
      <Router basename='/'>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
