import React from "react";
import Square from "./square";

class Board extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
    return(
        <div className="board">
            {console.log(this.props.SQ)}
            {(this.props.SQ).map((val,index)=>(
            <Square value={val} key={index} method={()=>this.props.XorOClicked(index)}/>
            ))}
           
        </div>
    )
    }
}
export default Board