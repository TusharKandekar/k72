
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects.jsx'
import { Navbar } from './componants/navbar/Navbar.jsx'



function App() {

  return (
    <>
      
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </>
  )
}

export default App
