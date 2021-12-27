import React from 'react'
import Side from './Side.jsx'

export default function Sides({sides}) {
  return (
    <section className="sides-container">
      {sides.map((side, i) => (
        <Side key={i} side={side} />
      ))}
    </section>
  )
}