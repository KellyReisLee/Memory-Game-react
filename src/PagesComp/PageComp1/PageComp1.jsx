import React from 'react'
import Title from '../../components/Title/Title';
import Buttons from '../../components/Buttons/Buttons'
import { handleSound, handleMusic, handleHelp, handlePlay } from "../../buttonsFunction";
import './PageComp1.css'
import FlexBoxButtons from '../../components/FlexBoxButtons/FlexBoxButtons'


const PageComp1 = ({ playMusic, setSound2, btnSound, btnMusic, btnHelp, btnPlay, setChangePages, setSound1, sound1, sound2 }) => {



  return (
    <>
      <div className='container-page1'>
        <div>
          <Title text='Memory Game' />
          <h3>Monsters</h3>
        </div>

        <FlexBoxButtons>
          <Buttons icon={btnSound} onAction={() => handleSound(setSound1, sound1)} />
          <Buttons icon={btnMusic} onAction={() => handleMusic(setSound2, sound2, sound1, playMusic)} />
          <Buttons icon={btnHelp} onAction={() => handleHelp(sound1)} />
          <Buttons icon={btnPlay} onAction={() => handlePlay(setChangePages, sound1)} />
        </FlexBoxButtons>
      </div>
    </>
  )
}

export default PageComp1
