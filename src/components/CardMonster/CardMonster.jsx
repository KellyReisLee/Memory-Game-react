import React from 'react'

const CardMonster = ({ monstersList, onClickedMonster, index }) => {
  return (
    <button onClick={() => onClickedMonster(index)} className='item ' >
      <img src={monstersList.img} alt={monstersList.name} />
    </button>
  )
}

export default CardMonster