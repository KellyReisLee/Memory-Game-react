import React from 'react'
import './BoxTime.css'
const BoxTime = ({ title, value }) => {
  return (
    <div className='box-time'>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}

export default BoxTime
