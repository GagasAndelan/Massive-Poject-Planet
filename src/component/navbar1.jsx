import React from "react"
import { Link } from 'react-router-dom'

const navbar1 = () => {
    return (
    <nav>
      <Link to= "/home1"><img src='./img/logo.png' className="title"></img></Link>
      <ul>
        <li>
          <Link to="/home1">Beranda</Link>
        </li>
        <li><Link to="/about1">Tentang</Link></li>
        <li><Link to="/jadwal">Jadwal</Link></li>
        <li><Link to="/">Keluar</Link></li>
      </ul>
    </nav>
  )
}

export default navbar1