const winnerLine = (squares) => {
    let ganador = false;
    let arr = [];
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        ganador = true;
        // arr.push(lines[i]);
        arr.push(a);
        arr.push(b);
        arr.push(c);
      }
    }
    if (ganador) {
      return arr;
    } else {
      return [-1, -1, -1];
    }
  };
export default winnerLine;