import React, { useState, useRef } from 'react'
import monstersArray from '../../util/monstersArray'
import Buttons from '../Buttons/Buttons'
import BoxTime from '../BoxTime/BoxTime'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import { handleMenu, handleReload, handleMusic, handleSound, handlePause } from "../../util/buttonsFunction";
import './CardsMemory.css'
let click = new Audio('../src/assets/sounds/click.mp3')


const items = ['monster1', 'monster2', 'monster3', 'monster4', 'monster5', 'monster6', 'monster7', 'monster8', 'monster9', 'monster10', 'monster11', 'monster12'];
const randomList = [...monstersArray].sort(() => Math.random() - 0.5)
const defaultState = { index: null, name: null };


const CardsMemory = ({ btnMenu, btnMusic, btnSound, btnReload, btnPause, setChangePages, sound1, setSound1, playMusic, setSound2, sound2 }) => {

  const [firstCard, setFirstCard] = useState(defaultState);
  const [secondCard, setSecondCard] = useState(defaultState);
  const [remainingCards, setRemainingCards] = useState(items);
  const [level, setLevel] = useState(1);
  const timer = useRef();

  function handleClickedMonster(index, name) {
    if (sound1 === true) {
      click.play()
    }
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

    } else if (secondCard.index === null && firstCard.index !== index) {
      setSecondCard({ index, name });


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
          <BoxTime title='Level' value={level} />
        </FlexBoxButtons>

        <FlexBoxButtons >
          <Buttons className='btn-menu' icon={btnSound} onAction={() => handleSound(setSound1, sound1)} />
          <Buttons className='btn-menu' icon={btnMusic} onAction={() => handleMusic(setSound2, sound2, sound1, playMusic)} />
          <Buttons className='btn-menu' icon={btnReload} onAction={() => handleReload(sound1, setChangePages)} />
          <Buttons className='btn-menu' icon={btnMenu} onAction={() => handleMenu(sound1, setChangePages)} />
          <Buttons className='btn-menu' icon={btnPause} onAction={() => handlePause(setChangePages)} />
        </FlexBoxButtons>
      </div>

    </>
  )
}

export default CardsMemory