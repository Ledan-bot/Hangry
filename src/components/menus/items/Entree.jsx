import React from 'react'
import DietRestrictions from './DietRestrictions.jsx'

export default function Entree({entree}) {
  const {name, price, dietary_restrictions} = entree

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  return (
    <>
      <h1>{name}</h1>
      <DietRestrictions dietary_restrictions={dietary_restrictions}/>
      <p>${formatter.format(price)}</p>
    </>
  )
}