import React, { useState, useRef } from 'react'
import monstersArray from '../../monstersArray'
import Buttons from '../Buttons/Buttons'
import BoxTime from '../BoxTime/BoxTime'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import { handleMenu, handleReload, handleMusic, handleSound, handlePause } from "../../buttonsFunction";
import './CardsMemory.css'



const items = ['monster1', 'monster2', 'monster3', 'monster4', 'monster5', 'monster6', 'monster7', 'monster8', 'monster9', 'monster10', 'monster11', 'monster12'];
const randomList = [...monstersArray].sort(() => Math.random() - 0.5)
const defaultState = { index: null, name: null };


const CardsMemory = ({ btnMenu, btnMusic, btnSound, btnReload, btnPause, setChangePage }) => {
  const [firstCard, setFirstCard] = useState(defaultState);
  const [secondCard, setSecondCard] = useState(defaultState);
  const [remainingCards, setRemainingCards] = useState(items);
  const [moves, setMoves] = useState(0);
  const timer = useRef();

  function handleClickedMonster(index, name) {
    console.log(name, index);
    console.log(remainingCards);
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setFirstCard(defaultState);
      setSecondCard(defaultState);
    }, 1000);

    if (
      firstCard.index === null ||
      (firstCard.index !== null && secondCard.index !== null)
    ) {
      setSecondCard(defaultState);
      setFirstCard({ index, name });
      setMoves((moves) => moves + 1);
    } else if (secondCard.index === null && firstCard.index !== index) {
      setSecondCard({ index, name });
      setMoves((moves) => moves + 1);

      if (firstCard.name === name) {
        setRemainingCards(remainingCards.filter((card) => card !== name));
      }
    }

  }

  return (
    <>
      <div className='monster-main'>
        <div className='monsters-box'>

          {randomList.map((item, index) => (
            <button
              key={index}
              className={`item ${(firstCard.index === index ||
                secondCard.index === index ||
                !remainingCards.includes(item.name)) &&
                "flipped"
                }`}
              onClick={() => handleClickedMonster(index, item.name)} >
              <div
                className="backSide"></div>
              <img
                src={item.img}
                alt={item} />

            </button>
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