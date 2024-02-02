import React from 'react'
import './Wrapper.css'

const Wrapper = ({ children, changePages }) => {
  return (
    <div className={changePages === 'CardsMemory' ? 'wrapper-display' : 'wrapper'}>
      {children}
    </div>
  )
}

export default Wrapper
