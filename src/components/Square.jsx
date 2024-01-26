const Square = ({ value, onSquareClick, winColor }) => {
    // const [value, setValue] = useState("");
    // const handleClick = () => {
    //   setValue("X");
    // };
    return (
      <button
        className="square"
        // onClick={handleClick}
        onClick={onSquareClick}
        style={{ backgroundColor: winColor ? "#ffac09" : "white" }}
      >
        {value}
      </button>
    );
  };

  export default Square;