import React from "react";
import Board from "./board";
import CalculateWinner from "../winner";

class Game1 extends React.Component{
  constructor(props){
    super(props)
      this.state={
        squares:[Array(9).fill("")],
        stepNumber:0,
        IsItX:true
      }
    }
    
    
    onClickShow=(i)=>{
      const xo=this.state.IsItX ? '✖️' : '⚫'
       const winner = CalculateWinner(this.state.squares[this.state.stepNumber]);
        const currSquare = this.state.squares.slice(0, this.state.stepNumber + 1);
        const current = currSquare[this.state.stepNumber];
        const squ = [...current];
        console.log(this.state.squares[this.state.stepNumber])
        if (winner||squ[i]) return;
        squ[i]=xo
       this.setState({squares:[...currSquare, squ]});
        this.setState({stepNumber:currSquare.length});
        this.setState({IsItX:!this.state.IsItX})
     }
    render(){
      const winner = CalculateWinner(this.state.squares[this.state.stepNumber]);

return (
    <div>
        <Board  SQ={this.state.squares[this.state.stepNumber]}  XorOClicked={this.onClickShow}/>
        {/* {console.log(squares[stepNumber])} */}
        <div className="underBoard">
        <div>
          <button onClick={()=>{
            this.setState({squares:[Array(9).fill("")]});
            this.setState({stepNumber:0});
            this.setState({IsItX:true})
             }}>Restart </button>
          <h3>History</h3>
          {/* {renderMoves()} */}
        </div>
        <h3>{winner? "Winner: " + winner : ""}</h3>
        <h3>{this.state.IsItX ? "Player: ✖️" : "Player: ⚫"}</h3>
      </div>
    </div>
)
        }
      }
export default Game1