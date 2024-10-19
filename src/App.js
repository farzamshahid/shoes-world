import MyCart from './Components/myCart';
import './App.css';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import SignUp from './Components/signUp';
import Login from './Components/login';
import ProductDashboard from './Components/productDashboard';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productDashboard" element={<ProductDashboard />} />
        <Route path="/myCart" element={<MyCart />} />

      </Routes>

    </div>
  );
}

export default App;
