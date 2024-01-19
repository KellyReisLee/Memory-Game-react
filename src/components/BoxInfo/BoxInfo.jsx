import React from 'react'
import './BoxInfo.css'

const BoxInfo = ({ text }) => {
  return (
    <div className='box-info'>
      <h2> Score: {text} points.</h2>
    </div>
  )
}

export default BoxInfo
