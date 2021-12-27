import React from 'react'

export default function Side({side}) {
  const {name, price} = side

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