import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, LogIn, ProductDetails, Purchases, ProtectedRoutes } from './pages/index'
import Cart from './pages/Cart'

function App() {
  const [count, setCount] = useState(0)


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />} />
        </Route>
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </HashRouter>
  )
}

export default App
