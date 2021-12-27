import React from 'react'
import Entrees from '../menus/items/Entrees.jsx'
import Sides from '../menus/items/Sides.jsx'
import Appetizers from '../menus/items/Appetizers.jsx'
import Items from '../menus/items/Items.jsx'
import './Modal.css'

export default function Modal({menu, handleModalShowing = f => f,}) {
  const {chef, entrees, appetizers, sides, drinks, desserts, name} =  menu
  return (
    <section className="modal-section">
      <h1 className="modal-title">{chef.name}'s {name} Menu</h1>
      <h3 className="item-title">Entrees:</h3>
      <Entrees entrees={entrees}/>
      <Sides sides={sides}/>
      <Appetizers appetizers={appetizers}/>
      <h2 className="item-title">Desserts:</h2>
      <Items items={desserts}/>
      <h3 className="item-title">Drinks:</h3>
      <Items items={drinks}/>
      <div className="modal-btn-container">
        <button className="modal-btn" onClick={() => alert("Order Functionaility Coming Soon")}>Order Now</button>
        <button className="modal-btn" onClick={handleModalShowing}>Close</button>
      </div>
    </section>
  )
}