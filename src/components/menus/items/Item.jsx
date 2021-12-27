import React from 'react'

export default function Item({item}) {
  const {name, price} = item

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