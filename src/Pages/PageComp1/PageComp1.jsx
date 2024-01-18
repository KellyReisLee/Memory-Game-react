import React from 'react'
import Title from '../Title/Title'
import CustomButtons from '../Button/CustomButtons'

const PageComp1 = ({ sound, setSound }) => {
  return (
    <>
      <div>
        <Title text='Memory Game' />
        <h3>Monsters</h3>
      </div>
      <CustomButtons setSound={setSound} sound={sound} />
    </>
  )
}

export default PageComp1
