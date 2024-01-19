import React from 'react'
import './LevelBox.css'
import Title from '../Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleMenu } from "../../buttonsFunction";



const arrayLevel = [];
for (let i = 1; i <= 24; i++) {
  arrayLevel.push(<button key={i} className={`item item-${i}`} ><div></div> </button>)
}

const LevelBox = ({ btnMenu }) => {

  return (
    <>
      <Title text='Levels' />
      <div div className='level-box'>
        {arrayLevel}
      </div >
      <div className='btn-menu-div'>
        <Buttons className='btn-menu' icon={btnMenu} onAction={handleMenu} />
      </div>
    </>
  )
}

export default LevelBox