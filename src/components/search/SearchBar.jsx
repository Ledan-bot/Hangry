import React, {useState} from 'react'
import Axios from 'axios'
import './searchBar.css'

export default function SearchBar() {
  return (
    <section className="search-container">
      <h1 className="search-title">Hangry's Most Ordered Menus</h1>
      <form>
        <p>Search:</p>
        <input type="search" name="search" placeholder="Find a dish, Chef, ingredient..." />
        <input type="submit" value="Search"/>
      </form>
    </section>
  )
}