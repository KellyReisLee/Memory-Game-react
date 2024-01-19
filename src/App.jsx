
import Wrapper from './components/Wrapper/Wrapper'
import ContainerContent from './components/ContainerContent/ContainerContent';
import PageComp1 from '../src/PagesComp/PageComp1/PageComp1';

import './App.css';
import LevelBox from './components/LevelBox/LevelBox';
import Title from './components/Title/Title';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import MusicOffRoundedIcon from '@mui/icons-material/MusicOffRounded';
import AllOutRoundedIcon from '@mui/icons-material/AllOutRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';





function App() {
  let sound = true;

  let btnSound = (sound ? (<VolumeUpRoundedIcon />) : (<VolumeOffRoundedIcon />))
  let btnMusic = (sound ? (<MusicNoteRoundedIcon />) : (<MusicOffRoundedIcon />))
  const btnExpand = (<AllOutRoundedIcon />)
  const btnHelp = (<QuestionMarkRoundedIcon />)
  const btnPlay = (<PlayArrowRoundedIcon />)
  const btnMenu = (<DehazeRoundedIcon />)




  return (
    <section className='app'>
      <Wrapper>
        {/* <ContainerContent>
          <PageComp1 btnSound={btnSound} btnMusic={btnMusic} btnExpand={btnExpand} btnHelp={btnHelp} btnPlay={btnPlay} />
        </ContainerContent> */}
        <LevelBox btnMenu={btnMenu} />
      </Wrapper>
    </section>
  )
}

export default App
