


let click = new Audio('../src/assets/sounds/click.mp3')

export function handleSound(setSound1, sound1) {
  setSound1(() => !sound1)
  if (sound1 === true) {
    click.play()
  }


}

export function handleMusic(setSound2, sound2, sound1, playMusic) {
  setSound2(() => !sound2)
  console.log('Music');
  if (sound1 === true) {
    click.play()
  }
  if (sound2 === false) {
    playMusic.play()
  }
  else {
    playMusic.pause()
  }
}


export function handleHelp(sound1) {
  if (sound1 === true) {
    click.play()
  }
  console.log('Help');
  console.log(sound1)
}

export function handlePlay(setChangePages, sound1) {
  if (sound1 === true) {
    click.play()
  }
  setChangePages('Levels')
  console.log('Play');
}

export function handleMenu(setChangePage) {
  if (sound1 === true) {
    click.play()
  }
  setChangePage('Home')
  console.log('Menu');
}

export function handelInfo() {
  console.log('Info');
}


export function handleNextGame() {
  console.log('Info');
}


export function handleReload() {
  console.log('Reload');
}


export function handleHome() {
  console.log('Home');
}


export function handlePause() {
  console.log('Pause');
}

// On Levels Component:
export function handleactiveLevel(addingLevels, i, setActiveBtn, setAddingLevels, setChangePage) {
  console.log(addingLevels);
  setAddingLevels((prev) => {
    if (addingLevels.includes(i)) {
      return prev
    } else {
      return [...prev, i]
    }

  })

  // setActiveBtn(() => !setActiveBtn)
  setChangePage('CardsMemory')

  console.log(i);
}







