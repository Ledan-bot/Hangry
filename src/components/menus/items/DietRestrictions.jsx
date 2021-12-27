import React from 'react'
import DietRestriction from './DietRestriction.jsx'
import './DietRestrictions.css'

export default function DietRestrictions({dietary_restrictions}) {
  if (dietary_restrictions.length === 0) {
    return (
      <>
      </>
    )
  } else {
    return (
      <div className="diet-restrictions-container">
        {dietary_restrictions.map((dietary_restriction, i) => (
          <DietRestriction key={i} dietary_restriction={dietary_restriction}/>
        ))}
      </div>
    )
  }
}