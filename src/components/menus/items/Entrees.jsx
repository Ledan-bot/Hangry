import React from 'react'
import Entree from './Entree.jsx'
import './Entrees.css'

export default function Entrees({entrees}) {
  return (
    <section className="entrees-container">
      {entrees.map((entree, i) => (
        <Entree key={i} entree={entree} />
      ))}
    </section>
  )
}