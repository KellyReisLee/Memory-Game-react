import React from 'react'
import './TimeOver.css'
import Title from '../Title/Title'
import Buttons from '../Buttons/Buttons';
import { handleHome, handelInfo, handleReload } from "../../buttonsFunction";
import BoxInfo from '../BoxInfo/BoxInfo';
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons';

const TimeOver = ({ btnHome, btnInfo, btnReload, setChangePage }) => {
  return (
    <div className='box-levelUp'>
      <Title text='Time Over' />
      <BoxInfo text='X' />
      <FlexBoxButtons>
        <Buttons icon={btnReload} onAction={handleReload} />
        <Buttons icon={btnInfo} onAction={handelInfo} />
        <Buttons icon={btnHome} onAction={() => handleHome(setChangePage)} />
      </FlexBoxButtons>
    </div>
  )
}

export default TimeOver