import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updataBoard, index }) => {
  const className = `square ${isSelected ? `is-selected` : ''}`
  const handleClick = () => {
    updataBoard()
  }
  return(
  <div onClick={handleClick} className={className}>
    {children}
  </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)
    const updataBoard = () => {

    }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
        <section className='game'>
          {
            board.map((_, index) => {
              return(
                <Square
                  key={index}
                  index={index}
                  updataBoard={updataBoard}
                  >
                    {board[index]}
                  </Square>
              )
            })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
            </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
            </Square>
        </section>
    </main>
  )
}

export default App
