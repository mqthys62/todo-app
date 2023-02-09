import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="/about">A propos</Link></li>
        </ul>
    </nav>
  )
}
