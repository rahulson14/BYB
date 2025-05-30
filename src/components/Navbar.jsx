import React from 'react'
import Blog from './Blog'
import { Link } from 'react-router-dom'

const Navbar = ({ handleAboutClick }) => {
  return (
    <div className="bg-[rgb(215,212,215)]">
      <nav className="flex items-center justify-between p-2 text-white">
        <img className="h-30" src="logo.png" alt="Logo BbyB" />

        <ul className="flex items-center justify-center gap-12 p-5 text-2xl font-bold">
          <li className="text-red-700 text-4xl cursor-pointer hover:text-red-500 transition">
           <Link to="/">HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            <Link to="/Blog">BLOGS</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
           <Link to="/Services">SERVICES</Link>
            </li>
          <li className="cursor-pointer hover:text-blue-600 transition" onClick={ handleAboutClick }>
            ABOUT US
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
