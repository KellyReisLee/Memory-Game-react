import React from 'react'
import Title from '../Title/Title'
import Buttons from '../Buttons/Buttons';
import { handleMenu, handelInfo, handleNextGame } from "../../util/buttonsFunction";
import BoxInfo from '../BoxInfo/BoxInfo';
import './LevelUp.css'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons';

const LevelUp = ({ btnMenu, btnInfo, btnNextLevel, setChangePages }) => {

  return (
    <div className='box-levelUp'>
      <Title text='Level Up' />
      <BoxInfo text='X' />
      <FlexBoxButtons>
        <Buttons icon={btnMenu} onAction={() => handleMenu(setChangePages)} />
        <Buttons icon={btnInfo} onAction={handelInfo} />
        <Buttons icon={btnNextLevel} onAction={handleNextGame} />
      </FlexBoxButtons>
    </div>
  )
}

export default LevelUp
