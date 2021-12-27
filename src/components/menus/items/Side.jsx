import React from 'react'

export default function Side({side}) {
  return (
    <>
      <h1>{side.name}</h1>
      <p>${side.price}.00</p>
    </>
  )
}