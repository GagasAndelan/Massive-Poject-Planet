import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import './css/nav.css'
import './css/login.css'
import './css/landing.css'
import './css/about.css'
import './css/jadwal.css'
import './css/daftarmember.css'
import './css/jadwalmember.css'
import './css/jadwalmember2.css'
import './css/trainer.css'
import './css/trainer1.css'
import Home from './pages/home'
import Home1 from './pages/home1'
import About from './pages/about'
import About1 from './pages/about1'
import Jadwal from './pages/schedule'
import Nyasar from './pages/nyasar'
import Trainer from './component/trainer'
import Trainer1 from './component/trainer1'
import Trainer2 from './component/trainer2'
import Trainer3 from './component/trainer3'
import Trainer4 from './component/trainer4'
import Daftarmember from './component/daftarMember'
import Jadwalmember from './component/jadwalmember'
import Jadwalmember2 from './component/jadwalmember2'
import Login from './pages/login'
import Daftar from './pages/signup'

function App() {
  return (
 <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home1' element={<Home1/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about1' element={<About1/>} />
        <Route path='/jadwal' element={<Jadwal/>} />
        <Route path='/trainer' element={<Trainer/>} />
        <Route path='/trainer1' element={<Trainer1/>} />
        <Route path='/trainer2' element={<Trainer2/>} />
        <Route path='/trainer3' element={<Trainer3/>} />
        <Route path='/trainer4' element={<Trainer4/>} />
        <Route path='/daftarMember' element={<Daftarmember/>} />
        <Route path='/jadwalMember' element={<Jadwalmember/>} />
        <Route path='/jadwalMember2' element={<Jadwalmember2/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Daftar/>} />
        <Route path='*' element={<Nyasar/>}/>
      </Routes>
    </Router>
  )
}

export default App
