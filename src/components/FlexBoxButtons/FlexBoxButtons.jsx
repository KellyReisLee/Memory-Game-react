import React from 'react'
import './FlexBoxButtons.css'
const FlexBoxButtons = ({ children }) => {
  return (
    <div className='container-flex'>
      {children}
    </div>
  )
}

export default FlexBoxButtons