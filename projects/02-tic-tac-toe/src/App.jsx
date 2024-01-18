import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti"

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame} from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)//null no hay ganador y el false que hay un empate


    const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
    }

    const updataBoard = (index) => {
      // no actualizamos esta posicion si ya tiene algo
      if(board[index] || winner ) return
      //actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      //Cambiar de turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      // revisar si hay algun ganador
      const newWinner = checkWinnerFrom(newBoard)
      if(newWinner){
        confetti()
        setWinner(newWinner)
      } else if(checkEndGame(newBoard)){
        setWinner(false)//empate
      }
    }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
        <section className='game'>
          {
            board.map((square, index) => {
              return(
                <Square
                  key={index}
                  index={index}
                  updataBoard={updataBoard}
                  >
                    {square}
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

        <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
