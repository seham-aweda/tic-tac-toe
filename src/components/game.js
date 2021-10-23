import React, { useState } from "react";
import Board from "./board";
import CalculateWinner from "../winner";

const Game = () =>{
    const [squares,setSquares]=useState([Array(9).fill("")])
    console.log(squares)
    const [stepNumber, setStepNumber] = useState(0);
    const [IsItX,setIsItX]=useState(true)
    const winner = CalculateWinner(squares[stepNumber]);
    const xo=IsItX ? '✖️' : '⚫'
    
    const onClickShow=(i)=>{
        const currSquare = squares.slice(0, stepNumber + 1);
        const current = currSquare[stepNumber];
        const squ = [...current];
        if (squ[i]) return;
        squ[i]=xo
        setSquares([...currSquare, squ]);
        setStepNumber(currSquare.length);
        setIsItX(!IsItX)
    }
return (
    <div>
        <Board  SQ={squares[stepNumber]}  XorOClicked={onClickShow}/>
        {console.log(squares[stepNumber])}
        <div className="underBoard">
        <div>
          <h3>History</h3>
          {/* {renderMoves()} */}
        </div>
        <h3>{winner ? "Winner: " + winner : "Player: " + xo}</h3>
      </div>
    </div>
)
}
export default Game