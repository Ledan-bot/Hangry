import React from 'react'
import Item from './Item.jsx'
import './Items.css'

export default function Items({items}) {
  return (
    <section className="item-container">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </section>
  )
}