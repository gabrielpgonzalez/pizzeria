import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import ShoppingCart from "./views/ShoppingCart";
import Footer from "./components/Footer";

const App = () => {
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <Router>
      <Navbar total={cartTotal} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
