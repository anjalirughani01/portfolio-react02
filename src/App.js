import './App.css';
import { useEffect, useState } from 'react';
import Square from './Components/Square';
import { Pattern } from './Patterns/Patterns';

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: 'none', state: "none" })
  const selectSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        return player;
      }
      return val;
    })
    );
    if (player === "X") {
      setPlayer("0")
    } else {
      setPlayer("X")
    }
  }

  useEffect(() => {
    checkWin()
  }, [board]);

  useEffect(() => {
    alert("Game Finish. Player won:", result.winner);
  }, [result])

  const checkWin = () => {
    Pattern.forEach((current) => {
      const firstPlayer = board[current[0]];
      if (firstPlayer === "") return
      let foundWinningPattern = true
      current.forEach((idx) => {
        if (idx !== firstPlayer) {
          foundWinningPattern = false
        }
        if (foundWinningPattern) {
          setResult({ winner: player, state: "won" })
        }
      })
    })
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} selectSquare={() => selectSquare(0)} />
          <Square val={board[1]} selectSquare={() => selectSquare(1)} />
          <Square val={board[2]} selectSquare={() => selectSquare(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} selectSquare={() => selectSquare(3)} />
          <Square val={board[4]} selectSquare={() => selectSquare(4)} />
          <Square val={board[5]} selectSquare={() => selectSquare(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} selectSquare={() => selectSquare(6)} />
          <Square val={board[7]} selectSquare={() => selectSquare(7)} />
          <Square val={board[8]} selectSquare={() => selectSquare(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
