import React from 'react'

export default function Item({item}) {
  return (
    <>
      <h1>{item.name}</h1>
      <p>${item.price}.00</p>
    </>
  )
}