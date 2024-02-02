import React, { useState } from 'react'
import './LevelBox.css'
import Title from '../Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleMenu, handleactiveLevel } from "../../util/buttonsFunction";



const LevelBox = ({ btnMenu, setChangePages, sound1 }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [addingLevels, setAddingLevels] = useState([1])


  const arrayLevel = [];
  for (let i = 1; i <= 5; i++) {
    arrayLevel.push(<button onClick={() => handleactiveLevel(addingLevels, i, setActiveBtn, setAddingLevels, setChangePages, sound1)} key={i} className={addingLevels.includes(i) ? `item-${i} ` : `item-${i} activeLevel`} disabled={addingLevels.includes(i) ? activeBtn : true} ><span>{i}</span> </button>)
  }

  // function handleChangePage() {
  //   setChangePages('Home')
  // }
  return (
    <>
      <Title text='Levels' />

      <div className='level-box'>
        {arrayLevel}
      </div>
      <div className='btn-menu-div'>
        <Buttons id='big-btn' className='btn-menu' icon={btnMenu} onAction={() => handleMenu(sound1, setChangePages)} />
      </div>
    </>
  )
}

export default LevelBox