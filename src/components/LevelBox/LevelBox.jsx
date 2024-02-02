import React, { useState } from 'react'
import './LevelBox.css'
import Title from '../Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleMenu, handleactiveLevel } from "../../util/buttonsFunction";



const LevelBox = ({ btnMenu, setChangePages, sound1 }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [addingLevels, setAddingLevels] = useState([1])


  const arrayLevel = [1, 2, 3, 4, 5];


  // function handleChangePage() {
  //   setChangePages('Home')
  // }
  return (
    <>
      <Title text='Levels' />

      <div className='level-box'>
        {arrayLevel.map((item, index) => (
          <button onClick={() => handleactiveLevel(addingLevels, item, setActiveBtn, setAddingLevels, setChangePages, sound1)} key={index} className={addingLevels.includes(item) ? `item-${item} ` : `item-${item} activeLevel`} disabled={addingLevels.includes(item) ? activeBtn : true} ><span>{item}</span> </button>)
        )}
      </div>
      <div className='btn-menu-div'>
        <Buttons id='big-btn' className='btn-menu' icon={btnMenu} onAction={() => handleMenu(sound1, setChangePages)} />
      </div>
    </>
  )
}

export default LevelBox