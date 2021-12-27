import React from 'react'

export default function DietRestriction({dietary_restriction}) {
  const style = {color: "red", paddingLeft: "7px", paddingRight: "7px"}
  return (
    <p style={style}>{dietary_restriction}</p>
  )
}