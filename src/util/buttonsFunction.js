


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


export function handleHelp(sound1, setModalBox, modalBox) {
  if (sound1 === true) {
    click.play()
  }
  setModalBox(() => !modalBox)
  console.log('help');
}

export function handlePlay(setChangePages, sound1) {
  if (sound1 === true) {
    click.play()
  }
  setChangePages('Levels')
  console.log('Play');
}

export function handleMenu(sound1, setChangePages) {
  if (sound1 === true) {
    click.play()
  }
  setChangePages('Home');
  console.log('Menu');
}

export function handelInfo() {
  console.log('Info');
}


export function handleNextGame() {
  console.log('Info');
}


export function handleReload(sound1, setChangePages) {
  if (sound1 === true) {
    click.play()
  }

  setChangePages('CardsMemory')


  console.log('Reload');
}


export function handleHome() {
  console.log('Home');
}


export function handlePause() {
  console.log('Pause');
}

// On Levels Component:
export function handleactiveLevel(addingLevels, item, setActiveBtn, setAddingLevels, setChangePages, sound1) {
  if (sound1 === true) {
    click.play()
  }

  setAddingLevels((prev) => {
    if (addingLevels.includes(item)) {
      return prev
    } else {
      return [...prev, item]
    }

  })

  // setActiveBtn(() => !setActiveBtn)
  setChangePages('CardsMemory')
  console.log(addingLevels);

}
