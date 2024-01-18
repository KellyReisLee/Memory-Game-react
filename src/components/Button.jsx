import React from 'react'

const Button = ({ children, onChangeAction }) => {
  return (
    <button className='btn-icons' onClick={onChangeAction}>
      {children}
    </button>
  )
}

export default Button