import React from 'react'

export default function Appetizer({appetizer}) {
  return (
    <>
      <h1>{appetizer.name}</h1>
      <p>${appetizer.price}</p>
    </>
  )
}