
import Title from '../Title/Title';
import Buttons from '../Buttons/Buttons'
import { handleSound, handleMusic, handleHelp, handlePlay } from "../../util/buttonsFunction";

import './PageComp1.css'
import FlexBoxButtons from '../FlexBoxButtons/FlexBoxButtons'
import Modal from '../Modal/Modal'


const PageComp1 = ({ playMusic, setSound2, btnSound, btnMusic, btnHelp, btnPlay, setChangePages, setSound1, sound1, sound2, modalBox, setModalBox }) => {



  return (
    <>
      {modalBox && <Modal setModalBox={setModalBox} modalBox={modalBox}
      />}
      <div className='container-page1'>
        <div>
          <Title text='Memory Game' />
          <h3 className='sub-title'>Monsters</h3>
        </div>

        <FlexBoxButtons>
          <Buttons icon={btnSound} onAction={() => handleSound(setSound1, sound1)} />
          <Buttons icon={btnMusic} onAction={() => handleMusic(setSound2, sound2, sound1, playMusic)} />
          <Buttons icon={btnHelp} onAction={() => handleHelp(sound1, setModalBox, modalBox)} />
          <Buttons icon={btnPlay} onAction={() => handlePlay(setChangePages, sound1)} />
        </FlexBoxButtons>
      </div>
    </>
  )
}

export default PageComp1
