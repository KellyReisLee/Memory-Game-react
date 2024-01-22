import React, { useState } from 'react'
import './LevelBox.css'
import Title from '../Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleMenu, handleactiveLevel } from "../../buttonsFunction";
import numbers from '../../numbersList'
import number from '../../assets/numbers/number-1.png'

console.log(numbers);


const LevelBox = ({ btnMenu }) => {
  const [activeBtn, setActiveBtn] = useState(false);
  console.log(activeBtn);
  const addingLevels = [1]

  const arrayLevel = [];
  for (let i = 1; i <= 24; i++) {
    arrayLevel.push(<button onClick={() => handleactiveLevel(i, setActiveBtn)} key={i} className={i === 1 ? `item-${i} ` : `item-${i} activeLevel`} disabled={addingLevels.includes(i) ? false : true} ><div></div> </button>)
  }

  return (
    <>
      <Title text='Levels' />
      {/* <img src={number} /> */}
      <div div className='level-box'>
        {numbers.map((item) => <button onClick={() => handleactiveLevel(item.id, setActiveBtn)} key={item.id} className={item.id === 1 ? `item-${item.id} ` : `item-${item.id} activeLevel`} disabled={addingLevels.includes(item.id) ? false : true} ><img src={item.img} /> </button>)}
      </div>
      <div className='btn-menu-div'>
        <Buttons className='btn-menu' icon={btnMenu} onAction={handleMenu} />
      </div>
    </>
  )
}

export default LevelBox