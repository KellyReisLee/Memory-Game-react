import React from 'react'
import Title from '../../components/Title/Title'
import CustomButtons from '../../components/Button/CustomButtons'

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
