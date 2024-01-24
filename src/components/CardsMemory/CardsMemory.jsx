import React, { useEffect, useState, useRef } from 'react'
import monstersList from '../../monstersArray'
import Buttons from '../Buttons/Buttons'
import BoxTime from '../BoxTime/BoxTime'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import { handleMenu, handleReload, handleMusic, handleSound, handlePause } from "../../buttonsFunction";
import './CardsMemory.css'

import CardMonster from '../CardMonster/CardMonster'

const CardsMemory = ({ btnMenu, btnMusic, btnSound, btnReload, btnPause, setChangePage }) => {



  const [name, setName] = useState([]);
  const [idList, setIdList] = useState([]);
  const timeCard = useRef();
  useEffect(() => {

  }, [])

  function handleClickedMonster(id, index, name) {
    //console.log(name, index);

    setIdList((prev) => {
      if (!prev.includes(id) && prev.length < 2) {
        return [...prev, id]
      }
      alert('Click on a different card or Wait to continue.')
      return prev
    })

    setName((prev) => {
      if (prev.length < 2) {
        return [...prev, name]
      }
      return prev

    })

    if (name[0] !== name[1]) {
      timeCard.current = setTimeout(() => {
        setName([])
        setIdList([])
      }, 3000);

    }


  }




  return (
    <>
      <div className='monster-main'>
        <div className='monsters-box'>
          {monstersList.map((item, index) => (
            <CardMonster idList={idList} key={item.id} id={item.id} name={name} onClickedMonster={() => handleClickedMonster(item.id, index, item.name)} index={index} monstersList={monstersList} />
          ))}
          {/* {monstersList.map((item, index) => (
            <button key={item.id} onClick={() => handleClickedMonster(item.name, index, item.id)} className='item ' >
              <img src={item.img} alt={item.name} />
            </button>
          ))} */}
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