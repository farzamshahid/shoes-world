import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import ProductDashboard from "./Components/ProductDashboard";
import MyCart from "./Components/MyCart";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <ProductDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/MyCart"
          element={
            <PrivateRoute>
              <MyCart />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
