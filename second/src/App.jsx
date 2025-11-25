import React from 'react'
import Home from './pages/home/home'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Contact from './components/contact/contact'


const App = () => {
  return (
    
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/shop' element ={<Shop/>} />
      <Route path='/cart' element ={<Cart/>} />
      <Route path='/contact' element ={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App