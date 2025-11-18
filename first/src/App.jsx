import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Nav from './components/nav'
import {ToastContainer} from "react-toastify"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      
     <ToastContainer/>

    </>
  )
}

export default App
