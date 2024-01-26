import { useState } from "react";
import Tablero from "./Tablero";
import styles from "../assets/css/styles.css";

const Juego = () =>  {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move) => {
      console.log("Hola!")
      let description;
      if (move > 0) {
        description = move + "° movimiento";
      } else {
        description = "Ir a partida Inicial";
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div>
          <header>
            <h1>Juguemos al gato!</h1>
          </header>
          <div className="game">
            <div className="game-board">
              <Tablero xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
              <h2>Historial de movimientos</h2>
              <ol>{moves}</ol>
            </div>
          </div>
      </div>      
    );
  };
  
export default Juego;
  