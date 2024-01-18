import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updataBoard, index }) => {
  const className = `square ${isSelected ? `is-selected` : ''}`
  const handleClick = () => {
    updataBoard(index)
  }
  return(
  <div onClick={handleClick} className={className}>
    {children}
  </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

]

function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)//null no hay ganador y el false que hay un empate

    const checkWinner = (boardToCheck) => {
      // revisamos todas las convinaciones ganadoras
      // para ver si X o O gano
      for(const combo of WINNER_COMBOS){
        const [a, b, c] = combo
        if(
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c] 
        ){
          return boardToCheck[a]
        }
      }
      // si no hay ganador
      return null

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
      const newWinner = checkWinner(newBoard)
      if(newWinner){
        setWinner(newWinner)
      }
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
