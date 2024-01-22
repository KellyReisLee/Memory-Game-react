
import Wrapper from './components/Wrapper/Wrapper'
import ContainerContent from './components/ContainerContent/ContainerContent';
import PageComp1 from '../src/PagesComp/PageComp1/PageComp1';
import { useState } from 'react'

import './App.css';
import LevelBox from './components/LevelBox/LevelBox';
import Title from './components/Title/Title';
import TimeOver from './components/TimeOver/TimeOver';
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
import CardsMemory from './components/CardsMemory/CardsMemory';





function App() {
  let sound = true;
  const [changePages, setChangePage] = useState('Home');

  let btnSound = (sound ? (<VolumeUpRoundedIcon sx={{ fontSize: 40 }} />) : (<VolumeOffRoundedIcon sx={{ fontSize: 40 }} />))
  let btnMusic = (sound ? (<MusicNoteRoundedIcon sx={{ fontSize: 40 }} />) : (<MusicOffRoundedIcon sx={{ fontSize: 40 }} />))
  const btnExpand = (<AllOutRoundedIcon sx={{ fontSize: 40 }} />)
  const btnHelp = (<QuestionMarkRoundedIcon sx={{ fontSize: 40 }} />)
  const btnPlay = (<PlayArrowRoundedIcon sx={{ fontSize: 40 }} />)
  const btnMenu = (<DehazeRoundedIcon sx={{ fontSize: 40 }} />)
  const btnInfo = (<EmojiEventsRoundedIcon sx={{ fontSize: 40 }} />)
  const btnNextLevel = (<ArrowForwardRoundedIcon sx={{ fontSize: 40 }} />)
  const btnReload = (<ReplayRoundedIcon sx={{ fontSize: 40 }} />)
  let btnHome = (<HomeRoundedIcon sx={{ fontSize: 40 }} />)




  return (
    <section className='app'>
      <Wrapper>
        {changePages === 'Home' && (
          <ContainerContent>
            <PageComp1 setChangePage={setChangePage} btnSound={btnSound} btnMusic={btnMusic} btnExpand={btnExpand} btnHelp={btnHelp} btnPlay={btnPlay} />
          </ContainerContent>
        )}
        {changePages === 'Levels' && (
          <LevelBox setChangePage={setChangePage} btnMenu={btnMenu} />
        )}
        {changePages === 'LevelUp' && (
          <LevelUp setChangePage={setChangePage} btnMenu={btnMenu} btnInfo={btnInfo} btnNextLevel={btnNextLevel} />
        )}
        {changePages === 'CardsMemory' && <CardsMemory btnMenu={btnMenu} />}
        {
          changePages === 'TimeOver' && (
            <TimeOver setChangePage={setChangePage} btnHome={btnHome} btnReload={btnReload} btnInfo={btnInfo} />
          )
        }

      </Wrapper>


    </section>
  )
}

export default App
