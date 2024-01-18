import React from 'react';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import MusicOffRoundedIcon from '@mui/icons-material/MusicOffRounded';
import AllOutRoundedIcon from '@mui/icons-material/AllOutRounded';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import './CustomButtons.css'

export default function CustomButtons({ sound, setSound }) {
  // replace this with your state or prop


  const BUTTONS = [
    {
      id: 1,
      icon: sound ? <VolumeUpRoundedIcon sx={{ fontSize: 60 }} /> : <VolumeOffRoundedIcon sx={{ fontSize: 60 }} />,
      function: () => handleSound()
    },
    {
      id: 2,
      icon: sound ? <MusicNoteRoundedIcon sx={{ fontSize: 60 }} /> : <MusicOffRoundedIcon sx={{ fontSize: 60 }} />,
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
    },
  ];
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

  return (
    <div className='flex-icon-btns'>
      {BUTTONS.map(button => (
        <button key={button.id} className='btn-icons' onClick={button.function}>
          {button.icon}</button>

      ))}
    </div>
  );
}

