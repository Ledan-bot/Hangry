import React from 'react'

export default function Entree({entree}) {
  const {name, price} = entree

  const formatter = new Intl.NumberFormat('en-US', {
    styles: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  return (
    <>
      <h1>{name}</h1>
      <p>${formatter.format(price)}</p>
    </>
  )
}