
import question from '../../assets/question.png'

function CardMonster({ idList, monstersList, onClickedMonster, index, id }) {

  return (
    <button onClick={() => onClickedMonster(index)} className='item ' >
      <img src={idList.includes(id) ? monstersList[index].img : question} alt={monstersList[index].name} />
    </button>
  )
}
export default CardMonster