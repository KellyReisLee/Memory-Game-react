import React from 'react'
import monsters from '../../monstersArray'
import Buttons from '../Buttons/Buttons'
import BoxTime from '../BoxTime/BoxTime'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import './CardsMemory.css'

const CardsMemory = ({ btnMenu }) => {
  return (
    <>
      <div className='level-box'>
        {monsters.map((item) => <button key={item.id}>
          <img src={item.img} />
        </button>)}
      </div>
      <div className='box-cards-memory-footer'>
        <FlexBoxButtons>
          <BoxTime title='Time' value='2:30' />
          <BoxTime title='Score' value='1800 points' />
          <BoxTime title='Level' value='1' />
        </FlexBoxButtons>

        <FlexBoxButtons className='btn-menu-div'>
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
        </FlexBoxButtons>
      </div>
    </>
  )
}

export default CardsMemory