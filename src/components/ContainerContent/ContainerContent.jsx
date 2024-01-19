import React from 'react'

import './ContainerContent.css'

const ContainerContent = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default ContainerContent