import './App.css'
import { Outlet } from 'react-router-dom'
import Navbarr from './Navbarr/Navbarr'
import Footer from './Footer/Footer'

function App() {


  return (
    <>
    <Navbarr/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default App
