import React from 'react'
import Entrees from '../menus/items/Entrees.jsx'
import Sides from '../menus/items/Sides.jsx'
import Items from '../menus/items/Items.jsx'
import './Modal.css'

export default function Modal({menu, handleModalShowing = f => f,}) {
  const {chef, entrees, sides, drinks, desserts, name} =  menu
  return (
    <section className="modal-section">
      <h1 className="modal-title">{chef.name}'s {name} Menu</h1>
      <h3>Entrees:</h3>
      <Entrees entrees={entrees}/>
      <h2>Sides:</h2>
      <Sides sides={sides}/>
      <h2>Desserts:</h2>
      <Items items={desserts}/>
      <h3>Drinks:</h3>
      <Items items={drinks}/>
      <div className="modal-btn-container">
        <button className="hangry-btn">Order Now</button>
        <button className="hangry-btn" onClick={handleModalShowing}>Close</button>
      </div>
    </section>
  )
}