import { Outlet } from 'react-router'
import Navbar from './layouts/Navbar/Navbar'
import Footer from './layouts/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
