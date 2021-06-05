import React from 'react'

import { Board } from './Components/Board'

function App() {

  return (
    <div className="App">
      <h1>
        How To Play:
      </h1>
      <div>
        <p>
          Move squares on the board by clicking an adjacent square to the empty square
        </p>
      </div>
      <div>
        <p>
          Additionally, a whole row or column can be moved by clicking the arrow above/to the side and the cells move in that direction
        </p>
      </div>
      <Board />
    </div>
  )
}

export default App
