import React from 'react'
import { IconContext } from 'react-icons'
import { MdOutlineFoodBank } from 'react-icons/md'
import './Header.css'

export default function Header() {
  return (
    <header className="hangry-header">
      <div className="title-container">
        <IconContext.Provider value={{ className: "header-react-icon" }}>
          <MdOutlineFoodBank />
        </IconContext.Provider>
        <h1 className="header-title">Hangry</h1>
      </div>
      <a href="https://staging.tryhungry.com/login" className="login-link">LOGIN/SIGNUP</a>
    </header>
  )
}