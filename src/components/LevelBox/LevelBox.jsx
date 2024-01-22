import React, { useState } from 'react'
import './LevelBox.css'
import Title from '../Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleMenu, handleactiveLevel } from "../../buttonsFunction";



const LevelBox = ({ btnMenu }) => {
  const [activeBtn, setActiveBtn] = useState(false);

  const addingLevels = [1]


  const arrayLevel = [];
  for (let i = 1; i <= 24; i++) {
    arrayLevel.push(<button onClick={() => handleactiveLevel(i, setActiveBtn)} key={i} className={i === 1 ? `item-${i} ` : `item-${i} activeLevel`} disabled={addingLevels.includes(i) ? false : true} ><span>{i}</span> </button>)
  }

  return (
    <>
      <Title text='Levels' />

      <div className='level-box'>
        {arrayLevel}
      </div>
      <div className='btn-menu-div'>
        <Buttons className='btn-menu' icon={btnMenu} onAction={handleMenu} />
      </div>
    </>
  )
}

export default LevelBox