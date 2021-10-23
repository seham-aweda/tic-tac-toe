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
        if (winner||squ[i]) return;
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
        <button className="steps" onClick={()=>{
            setStepNumber(0)
            setSquares([Array(9).fill("")])
            setIsItX(true)
            }}>Restart </button>
    </div>
        <h3>{winner? "Winner: " + winner : (squares.length===10?"DRAW":winner)}</h3>
        <h3>{"Player: " + xo}
        </h3>
    </div>
        <div style={{display:"flex" ,width: "40rem", flexWrap: "wrap",margin:"2px"}}>
            <h3>History</h3>
            {squares.map((move,index)=>{
                return <li key={index}><button className="steps" onClick={()=>{ 
                        setStepNumber(index)
                        setIsItX(index%2===0)
                }}>go to step {index}</button></li>
            })}
        </div>
</div>
)
}
export default Game