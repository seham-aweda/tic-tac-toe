import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
    return (
            <button className="square" onClick={this.props.method}>{this.props.value}</button>
        
    )
    }
}
export default Square