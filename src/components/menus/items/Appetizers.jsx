import React from 'react'
import Appetizer from './Appetizer.jsx'

export default function Appetizers({appetizers}) {
  if (appetizers.length === 0) {
    return (
      <>
      </>
    )
  } else {
    return (
      <>
        <h3>Appetizers:</h3>
        <section>
          {appetizers.map((appetizer, i) => (
            <Appetizer key={i} appetizer={appetizer} />
          ))}
        </section>
      </>
    )
  }
}