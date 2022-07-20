
import React, { useState } from 'react'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"


const App = () => {

  const [login, setIsLoggedIn] = useState(true)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={login ? <Navigate to="/" replace /> :  <Login />}  />
        <Route path = "/register" element={login ? <Navigate to="/" replace /> :  <Register />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
