import React from 'react'
import Title from '../../components/Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleSound, handleMusic, handleExpand, handleHelp, handlePlay } from "../../buttonsFunction";
import './PageComp1.css'

const PageComp1 = ({ btnSound, btnMusic, btnExpand, btnHelp, btnPlay }) => {
  return (
    <>
      <div className='contaimer-page1'>
        <div>
          <Title text='Memory Game' />
          <h3>Monsters</h3>
        </div>
        <div className='flex-icon-btns'>
          <Buttons icon={btnSound} onAction={() => handleSound()} />
          <Buttons icon={btnMusic} onAction={() => handleMusic()} />
          <Buttons icon={btnExpand} onAction={() => handleExpand()} />
          <Buttons icon={btnHelp} onAction={() => handleHelp()} />
          <Buttons icon={btnPlay} onAction={() => handlePlay()} />
        </div>
      </div>
    </>
  )
}

export default PageComp1
