import { useState } from 'react'

import './App.css'
import './ProductInf.css'
import './styles/home.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import {Home,LogIn,ProductDetails, Purchases} from './pages/index'
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='purchases' element={<Purchases/>}/>
      </Routes>
       
    </HashRouter>
  )
}

export default App
