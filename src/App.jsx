import { Outlet } from 'react-router'
import Navbar from './layouts/Navbar/Navbar'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
