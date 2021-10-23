import React from 'react';

class Square extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        const style=this.props.value ? `square ${this.props.value}` : "square"
    return (
            <button className={style} onClick={this.props.method}>{this.props.value}</button>
        
    )
    }
}
export default Square