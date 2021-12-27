import React from 'react'
import Appetizer from './Appetizer.jsx'
import './Appetizers.css'

export default function Appetizers({appetizers}) {
  if (appetizers.length === 0) {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        <h3 className="item-title">Appetizers:</h3>
        <section className="appetizer-container">
          {appetizers.map((appetizer, i) => (
            <Appetizer key={i} appetizer={appetizer} />
          ))}
        </section>
      </>
    )
  }
}