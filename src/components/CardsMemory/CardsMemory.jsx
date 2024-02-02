import React, { useState, useRef, useEffect } from 'react'
import { monstersArray1, monstersArray2, monstersArray3, monstersArray4, monstersArray5, items } from '../../util/monstersArray'
import Buttons from '../Buttons/Buttons'
import BoxTime from '../BoxTime/BoxTime'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import { handleMenu, handleReload, handleMusic, handleSound, handlePause } from "../../util/buttonsFunction";
import './CardsMemory.css'
let click = new Audio('../src/assets/sounds/click.mp3')



const defaultState = { index: null, name: null };
const lists = [monstersArray1, monstersArray2, monstersArray3, monstersArray4, monstersArray5]
const CardsMemory = ({ btnMenu, btnMusic, btnSound, btnReload, btnPause, setChangePages, sound1, setSound1, playMusic, setSound2, sound2 }) => {


  const [firstCard, setFirstCard] = useState(defaultState);
  const [secondCard, setSecondCard] = useState(defaultState);
  const [remainingCards, setRemainingCards] = useState(items);
  const [level, setLevel] = useState(0)
  const [listLevel, setListLevel] = useState(lists[level])

  const timer = useRef();

  useEffect(() => {
    setListLevel((prev) => prev.sort(() => Math.random() - 1))
  }, [level])

  console.log(listLevel);

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
        <div className={`monsters-box display-box${level}`}>

          {listLevel.map((item, index) => (
            <button
              key={index}
              className={`item item-width ${(firstCard.index === index ||
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
        <div className='box-card-score'>
          <BoxTime title='Time' value='2:30' />
          <BoxTime title='Score' value='1800 points' />
          <BoxTime title='Level' value={level < 5 ? level + 1 : 0} />
        </div>

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