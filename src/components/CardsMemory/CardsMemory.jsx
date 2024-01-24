import React, { useEffect, useState, useRef } from 'react'
import monstersList from '../../monstersArray'
import Buttons from '../Buttons/Buttons'
import BoxTime from '../BoxTime/BoxTime'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import { handleMenu, handleReload, handleMusic, handleSound, handlePause } from "../../buttonsFunction";
import './CardsMemory.css'
import question from '../../assets/question.png'
import CardMonster from '../CardMonster/CardMonster'

const CardsMemory = ({ btnMenu, btnMusic, btnSound, btnReload, btnPause, setChangePage }) => {
  // const monstersRef = useRef(monsters);

  const [clicked, setClicked] = useState([]);
  const [monsters, setMonsters] = useState(monstersList.sort(() => Math.random() - 0.5))


  function handleClickedMonster(id, index) {
    console.log(id, index);

  }

  return (
    <>
      <div className='monster-main'>
        <div className='monsters-box'>
          {monsters.map((item, index) => (
            <CardMonster key={item.id} onClickedMonster={() => handleClickedMonster(item.id, index)} index={index} monstersList={monstersList} />
          ))}
        </div>
      </div>
      <div className='box-cards-memory-footer'>
        <FlexBoxButtons>
          <BoxTime title='Time' value='2:30' />
          <BoxTime title='Score' value='1800 points' />
          <BoxTime title='Level' value='1' />
        </FlexBoxButtons>

        <FlexBoxButtons >
          <Buttons className='btn-menu' icon={btnSound} onAction={() => handleSound(setChangePage)} />
          <Buttons className='btn-menu' icon={btnMusic} onAction={() => handleMusic(setChangePage)} />
          <Buttons className='btn-menu' icon={btnReload} onAction={() => handleReload(setChangePage)} />
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(setChangePage)} />
          <Buttons className='btn-menu' icon={btnPause} onAction={() => handlePause(setChangePage)} />
        </FlexBoxButtons>
      </div>

    </>
  )
}

export default CardsMemory