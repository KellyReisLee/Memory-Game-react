


function CardMonster({ randomList, onClickedMonster, index }) {
  console.log(randomList);
  return (
    <button onClick={() => onClickedMonster(index)} className='item ' >
      <div className="backSide"></div>
      <img alt={randomList[index].name} />
    </button>
  )
}
export default CardMonster