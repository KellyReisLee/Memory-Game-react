
import './Modal.css'

import React from 'react';


function Modal({ setModalBox, modalBox }) {


  const handleClose = () => {
    setModalBox(false)

  };
  return (
    <dialog onClose={handleClose} className='modal' >
      <div className='modal-container'>
        <h2>About the Game</h2>
        <p>Click a card to reveal the Monster on it. Memorize it so that you can match to similar monster. Match all of the cards on the board to complete the level. Complete all 5 levels to win the game </p>


        <button className='modal-btn' onClick={() => handleClose()}>Close</button>
      </div>

    </dialog>
  )
}



export default Modal
