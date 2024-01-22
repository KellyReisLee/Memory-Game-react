export function handleSound() {
  console.log('Sound');
}

export function handleMusic() {
  console.log('Music');
}

export function handleExpand() {
  console.log('Expand');
}

export function handleHelp() {
  console.log('Help');
}

export function handlePlay(setChangePage) {
  setChangePage('Levels')
  console.log('Play');
}

export function handleMenu(setChangePage) {
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







