import React, { useState } from 'react'
import './LevelBox.css'
import Title from '../Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleMenu, handleactiveLevel } from "../../buttonsFunction";



const LevelBox = ({ btnMenu, setChangePage }) => {
  const [activeBtn, setActiveBtn] = useState(false);

  const [addingLevels, setAddingLevels] = useState([1])


  const arrayLevel = [];
  for (let i = 1; i <= 24; i++) {
    arrayLevel.push(<button onClick={() => handleactiveLevel(addingLevels, i, setActiveBtn, setAddingLevels, setChangePage)} key={i} className={addingLevels.includes(i) ? `item-${i} ` : `item-${i} activeLevel`} disabled={addingLevels.includes(i) ? activeBtn : true} ><span>{i}</span> </button>)
  }

  return (
    <>
      <Title text='Levels' />

      <div className='level-box'>
        {arrayLevel}
      </div>
      <div className='btn-menu-div'>
        <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
      </div>
    </>
  )
}

export default LevelBox