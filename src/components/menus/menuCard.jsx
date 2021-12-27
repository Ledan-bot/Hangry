import React from 'react'
import Axios from 'axios'
import './menuCard.css'
import Entrees from './items/Entrees.jsx'

export default function MenuCard({menu, index, handleModalShowing = f => f, selectMenu = f => f}) {
  const {chef, entrees, sides, name, miscellaneous, image} = menu

  const handleOrder = (e) => {
    e.preventDefault();
    selectMenu(index)
  }

  return (
    <section className="menu-card-container">
      <div className="card-top">
        <img src={image} alt="food" className="menu-image"></img>
        <p className="chef-description">{chef.description}</p>
      </div>
      <br />
      <div className="card-bottom">
        <div>
          <h2 className="card-title">{chef.name}'s {name}</h2>
          <h4>Stars: {miscellaneous.stars}</h4>
          <p>Average Price per Person: ${miscellaneous.average_price}</p>
          <button onClick={handleOrder} className="hangry-btn">View Menu</button>
        </div>
        <img src={chef.image} className="chef-image" alt="chef image"></img>
      </div>
    </section>
  )
}