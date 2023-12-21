import React from "react"
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
    <nav>
      <Link to= "/"><img src='./img/logo.png' className="title"></img></Link>
      
      <ul>
      
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li><Link to="/trainer">Trainer</Link></li>
        <li><Link to="/about">Tentang</Link></li>
        <li><Link to="/login">Masuk</Link></li>
      </ul>
    </nav>
  )
}

export default navbar