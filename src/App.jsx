import { useState } from 'react'
import Header from './Components/Header';
import './styles/home.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import {Home,LogIn,ProductDetails, Purchases} from './pages/index'
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)


  return (
    <HashRouter>
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
