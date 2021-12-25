import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Header from './components/header/header.jsx'
import SearchBar from './components/search/SearchBar.jsx'
import MenuCard from './components/menus/menuCard.jsx'


export default function App() {
  let [menus, updateMenus] = useState(null)

  useEffect(() => {
    Axios.get('/api/menus')
      .then(res => {
        updateMenus(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])
  if (!menus) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <SearchBar />
        <main>
          {menus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}/>
          ))}
        </main>
      </>
    )
  }
}