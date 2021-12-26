import React, {useState} from 'react'
import Axios from 'axios'
import './searchBar.css'

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
        <p>Search:</p>
        <input type="search" name="search" placeholder="Find a dish, Chef, ingredient..." onChange={e => updateInput(e.target.value)} />
        <input type="submit" value="Search"/>
      </form>
    </section>
  )
}