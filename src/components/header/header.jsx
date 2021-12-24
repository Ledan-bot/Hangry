import React from 'react'
import {IconContext} from 'react-icons'
import {MdOutlineFoodBank} from 'react-icons/md'
import './header.css'

export default function Header() {
  return (
    <header className="hangry-header">
      <IconContext.Provider value={{color: "red", size: '40%',}}>
        <MdOutlineFoodBank />
      </IconContext.Provider>
      <h1 className="header-title">Hangry</h1>
    </header>
  )
}