import Square from "./Square";
import calculateWinner from "./funciones/calculateWinner";
import hayEmpate from "./funciones/hayEmpate";
import winnerLine from "./funciones/winnerLine";

function Tablero({ xIsNext, squares, onPlay }) {
    const handleClick = (i) => {
      if (squares[i] || calculateWinner(squares) || hayEmpate(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? "❤️" : "😎";
      onPlay(nextSquares);
    };
  
    const winner = calculateWinner(squares);
    const empate = hayEmpate(squares);
    const arrayWinnerLine = winnerLine(squares);
  
    let status;
    if (winner) {
      status = "El ganador es: " + winner;
    } else {
      if (empate) {
        status = "EMPATE!!!";
      } else {
        status = "Juega: " + (xIsNext ? "❤️" : "😎");
      }
    }
  
    return (
      <>
        <div className="status">{status}</div>
  
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            winColor={arrayWinnerLine.includes(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            winColor={arrayWinnerLine.includes(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            winColor={arrayWinnerLine.includes(2)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            winColor={arrayWinnerLine.includes(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            winColor={arrayWinnerLine.includes(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            winColor={arrayWinnerLine.includes(5)}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            winColor={arrayWinnerLine.includes(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            winColor={arrayWinnerLine.includes(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            winColor={arrayWinnerLine.includes(8)}
          />
        </div>
      </>
    );
  }
  export default Tablero;
