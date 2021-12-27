import React from 'react'

export default function Appetizer({appetizer}) {
  const {name, price} = appetizer

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