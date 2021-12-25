import React from 'react'
import Axios from 'axios'
import './menuCard.css'

export default function MenuCard({menu}) {
  const {chef, entrees, name, miscellaneous} = menu

  return (
    <section className="menu-card-container">
      <p>{chef.description}</p>
      <br />
      <div className="card-bottom">
        <div>
          <h2>{chef.name}'s {name}</h2>
          <p>Average Price per Person: ${miscellaneous.average_price}</p>
        </div>
        <img src={chef.image}></img>
      </div>
    </section>
  )
}