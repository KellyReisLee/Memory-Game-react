import React from 'react'
import './Button.css'

const Button = ({ children, onChangeAction }) => {
  return (
    <button className='btn-icons' onClick={onChangeAction}>
      {children}
    </button>
  )
}

export default Button