import monster1 from '../assets/monsters/monster1.png'
import monster2 from '../assets/monsters/monster2.png'
import monster3 from '../assets/monsters/monster3.png'
import monster4 from '../assets/monsters/monster4.png'
import monster5 from '../assets/monsters/monster5.png'
import monster6 from '../assets/monsters/monster6.png'
import monster7 from '../assets/monsters/monster7.png'
import monster8 from '../assets/monsters/monster8.png'
import monster9 from '../assets/monsters/monster9.png'
import monster10 from '../assets/monsters/monster10.png'
import monster11 from '../assets/monsters/monster11.png'
import monster12 from '../assets/monsters/monster12.png'
import monster13 from '../assets/monsters/monster13.png'
import monster14 from '../assets/monsters/monster14.png'
import monster15 from '../assets/monsters/monster1.png'


// level 5:
export const items = ['monster1', 'monster2', 'monster3', 'monster4', 'monster5', 'monster6', 'monster7', 'monster8', 'monster9', 'monster10', 'monster11', 'monster12', 'monster13', 'monster14', 'monster15'];



export const monstersArray = [
  {
    id: 1,
    name: 'monster1',
    img: monster1
  },
  {
    id: 2,
    name: 'monster2',
    img: monster2
  },
  {
    id: 3,
    name: 'monster3',
    img: monster3
  },
  {
    id: 4,
    name: 'monster4',
    img: monster4
  },
  {
    id: 5,
    name: 'monster5',
    img: monster5
  },
  {
    id: 6,
    name: 'monster6',
    img: monster6
  },
  {
    id: 7,
    name: 'monster7',
    img: monster7
  },
  {
    id: 8,
    name: 'monster8',
    img: monster8
  },
  {
    id: 9,
    name: 'monster9',
    img: monster9
  },
  {
    id: 10,
    name: 'monster10',
    img: monster10
  },
  {
    id: 11,
    name: 'monster11',
    img: monster11
  },
  {
    id: 12,
    name: 'monster12',
    img: monster12
  },
  {
    id: 13,
    name: 'monster13',
    img: monster13
  },
  {
    id: 14,
    name: 'monster14',
    img: monster14
  },


]


// Level 1:
const doubleList = [...monstersArray, ...monstersArray]
console.log(doubleList);

const itemsListOrder = doubleList.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

export const monstersArray1 = itemsListOrder.slice(0, 12).sort(() => Math.random() - 0.5);
export const monstersArray2 = itemsListOrder.slice(0, 16).sort(() => Math.random() - 0.5);
export const monstersArray3 = itemsListOrder.slice(0, 20).sort(() => Math.random() - 0.5);
export const monstersArray4 = itemsListOrder.slice(0, 24).sort(() => Math.random() - 0.5);
export const monstersArray5 = itemsListOrder.slice(0, 28).sort(() => Math.random() - 0.5);


console.log(monstersArray1, monstersArray2, monstersArray3, monstersArray4, monstersArray5);



