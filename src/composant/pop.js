import React from 'react'
import Popup from 'reactjs-popup'

const PopupExample =  () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>confirmer  la suppression</div>
    <button>oui</button>
    <button>Non</button>
  </Popup>
)
export default PopupExample;