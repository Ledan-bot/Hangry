import React from 'react'

export default function Entree({entree}) {
  return (
    <>
      <h1 >{entree.name}</h1>
      <p>${entree.price}.00</p>
    </>
  )
}