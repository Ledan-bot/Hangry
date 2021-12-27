import React from 'react'
import Side from './Side.jsx'
import './Sides.css'

export default function Sides({ sides }) {
  if (sides.length === 0) {
    return (
      <>
      </>
    )
  } else {
    return (
      <section className="sides-container">
        {sides.map((side, i) => (
          <Side key={i} side={side} />
        ))}
      </section>
    )
  }
}