import { useState } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import ContainerContent from './components/ContainerContent/ContainerContent';
import './App.css';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import MusicOffRoundedIcon from '@mui/icons-material/MusicOffRounded';
import AllOutRoundedIcon from '@mui/icons-material/AllOutRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';




function App() {
  const [sound, setSound] = useState(true);

  function handleSound() {
    console.log('Sound');
  }
  function handleMusic() {
    console.log('Music');
  }
  function handleExpand() {
    console.log('Expand');
  }
  function handleHelp() {
    console.log('Help');
  }

  function handlePlay() {
    console.log('Play');
  }
  const buttons = [
    {
      id: 1,
      icon: sound ? < VolumeUpRoundedIcon sx={{ fontSize: 60 }} /> : <VolumeOffRoundedIcon sx={{ fontSize: 60 }} />,
      function: () => handleSound(),
    },
    {
      id: 2,
      icon: sound ? < MusicNoteRoundedIcon sx={{ fontSize: 60 }} /> : <MusicOffRoundedIcon sx={{ fontSize: 60 }} />,
      function: () => handleMusic()
    },
    {
      id: 3,
      icon: <AllOutRoundedIcon sx={{ fontSize: 60 }} />,
      function: () => handleExpand()
    },
    {
      id: 4,
      icon: <QuestionMarkRoundedIcon sx={{ fontSize: 60 }} />,
      function: () => handleHelp()
    },
    {
      id: 5,
      icon: <PlayArrowRoundedIcon sx={{ fontSize: 60 }} />,
      function: () => handlePlay()
    }
  ]



  return (
    <section className='app'>
      <Wrapper>
        <ContainerContent>
          <div>
            <Title text='Memory Game' />
            <h3>Monsters</h3>
          </div>
          <div className='flex-icon-btns'>
            {buttons.map((btn) => (
              <Button key={btn.id} onChangeAction={btn.function}>{btn.icon}</Button>
            ))}

          </div>
        </ContainerContent>
      </Wrapper>
    </section>
  )
}

export default App
