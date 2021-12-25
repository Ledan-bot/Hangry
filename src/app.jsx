import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import MenuCard from './components/menus/menuCard.jsx'
import Header from './components/header/header.jsx'


export default function App() {
  let [menu, updateMenu] = useState(null)

  useEffect(() => {
    Axios.get('/test')
      .then(res => {
        updateMenu(res.data)
      })
      .catch(err => {
        alert(err)
      })
  }, [])
  if (!menu) {
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
          <MenuCard menu={menu}/>
        </main>
      </>
    )
  }
}