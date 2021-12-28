import React, {useState} from 'react'
import {BsSearch} from 'react-icons/bs'
import {IconContext} from 'react-icons'
import Axios from 'axios'
import './SearchBar.css'

export default function SearchBar({updateSearchQuery = f => f}) {
  let [input, updateInput] = useState('')

  const handleSearch = e => {
    e.preventDefault();
    updateSearchQuery(input)
  }

  return (
    <section className="search-container">
      <h1 className="search-title">Washington DC's Most Ordered Menus</h1>
      <form onSubmit={handleSearch} action="/" method="get">
        <input type="search" name="search" placeholder="Find a Dish, Chef, Ingredient..." className="input-container"onChange={e => updateInput(e.target.value)} />
       <button type="submit" className="search-btn">
         <IconContext.Provider value={{className: "search-react-icon"}}>
            <BsSearch />
         </IconContext.Provider>
       </button>
      </form>
    </section>
  )
}