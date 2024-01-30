
import Wrapper from './components/Wrapper/Wrapper'
import ContainerContent from './components/ContainerContent/ContainerContent';
import PageComp1 from '../src/PagesComp/PageComp1/PageComp1';
import CardsMemory from './components/CardsMemory/CardsMemory';
import LevelBox from './components/LevelBox/LevelBox';
import Title from './components/Title/Title';
import TimeOver from './components/TimeOver/TimeOver';
import { useState, useEffect } from 'react'

import './App.css';


import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import MusicOffRoundedIcon from '@mui/icons-material/MusicOffRounded';
import AllOutRoundedIcon from '@mui/icons-material/AllOutRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import LevelUp from './components/LevelUp/LevelUp';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import music from "../src/assets/sounds/music.mp3";
const playMusic = new Audio(music);





function App() {

  const [sound1, setSound1] = useState(true)
  const [sound2, setSound2] = useState(true)
  const [play, setPlay] = useState(true)
  const [changePages, setChangePages] = useState('Home');


  const Playit = () => {

    if (sound2) {
      playMusic.play();
    } else {
      playMusic.pause()
    }

  }
  useEffect(() => Playit(), [sound1]);

  let btnSound = (sound1 ? (<VolumeUpRoundedIcon sx={{ fontSize: 40 }} />) : (<VolumeOffRoundedIcon sx={{ fontSize: 40 }} />))
  let btnMusic = (sound2 ? (<MusicNoteRoundedIcon sx={{ fontSize: 40 }} />) : (<MusicOffRoundedIcon sx={{ fontSize: 40 }} />))
  const btnExpand = (<AllOutRoundedIcon sx={{ fontSize: 40 }} />)
  const btnHelp = (<QuestionMarkRoundedIcon sx={{ fontSize: 40 }} />)
  const btnPlay = (<PlayArrowRoundedIcon sx={{ fontSize: 40 }} />)
  const btnMenu = (<DehazeRoundedIcon sx={{ fontSize: 40 }} />)
  const btnInfo = (<EmojiEventsRoundedIcon sx={{ fontSize: 40 }} />)
  const btnNextLevel = (<ArrowForwardRoundedIcon sx={{ fontSize: 40 }} />)
  const btnReload = (<ReplayRoundedIcon sx={{ fontSize: 40 }} />)
  const btnHome = (<HomeRoundedIcon sx={{ fontSize: 40 }} />)
  const btnPause = play ? (<PlayArrowRoundedIcon sx={{ fontSize: 40 }} />) : (<PauseRoundedIcon sx={{ fontSize: 40 }} />)

  return (
    <section className='app'>
      <Wrapper>
        {changePages === 'Home' && (
          <ContainerContent>
            <PageComp1 playMusic={playMusic} sound1={sound1} sound2={sound2} setSound2={setSound2} setSound1={setSound1} setChangePage={setChangePages} btnSound={btnSound} btnMusic={btnMusic} btnExpand={btnExpand} btnHelp={btnHelp} btnPlay={btnPlay} />
          </ContainerContent>
        )}
        {/* {changePages === 'Levels' && (
          <LevelBox setChangePage={setChangePage} btnMenu={btnMenu} />
        )}
        {changePages === 'LevelUp' && (
          <LevelUp setChangePage={setChangePage} btnMenu={btnMenu} btnInfo={btnInfo} btnNextLevel={btnNextLevel} />
        )} */}
        {/* {
          changePages === 'TimeOver' && (
            <TimeOver setChangePage={setChangePage} btnHome={btnHome} btnReload={btnReload} btnInfo={btnInfo} />
          )
        } */}

        {/* {<CardsMemory setChangePage={setChangePage} btnMenu={btnMenu} btnSound={btnSound} btnMusic={btnMusic} btnReload={btnReload} btnPause={btnPause} />} */}




      </Wrapper>


    </section>
  )
}

export default App
