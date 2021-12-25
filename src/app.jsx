import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import MenuCard from './components/menus/menuCard.jsx'
import Header from './components/header/header.jsx'


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
        <main>
          {menus.map((menu) => (
            <MenuCard menu={menu} key={menu._id}/>
          ))}
        </main>
      </>
    )
  }
}