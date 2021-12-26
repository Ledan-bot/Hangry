import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Header from './components/header/header.jsx'
import SearchBar from './components/search/SearchBar.jsx'
import MenuCard from './components/menus/menuCard.jsx'


export default function App() {
  let [menus, updateMenus] = useState(null)
  const {search} = window.location
  const query = new URLSearchParams(search).get('search')
  let [searchQuery, updateSearchQuery] = useState(query || '')

  useEffect(() => {
    Axios.get('/api/menus')
      .then(res => {
        updateMenus(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])

  const filterMenus = (menus, query) => {
    if (!query) {
      return menus
    }
    return menus.filter((menu) => {
      const { name, entrees, sides, tags, desserts, chef} = menu
      if (name.includes(query)) { return true }
      if (chef.name.includes(query)) { return true }
      for (let i = 0; i < tags.length; i++) {
          if (tags[i].tag.includes(query)) { return true }
      }
      for (let j = 0; j < entrees.length; j++) {
        if (entrees[j].name.includes(query)) { return true }
      }
    })
  }



  if (!menus) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  } else {
    let filteredMenus = filterMenus(menus, searchQuery)
    return (
      <>
        <Header />
        <SearchBar updateSearchQuery={updateSearchQuery}/>
        <main>
          {filteredMenus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}/>
          ))}
        </main>
      </>
    )
  }
}