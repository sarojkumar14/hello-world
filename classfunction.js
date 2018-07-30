import React, { Component } from 'react';

export const FunctionComponent=function FunctionComponent(props){
    return (
            <div>
Hi {props.name}
            </div>
        )
}




export const ArrowFunctionComponent=(props)=>{
    return(
            <div>
Hi {props.name}
            </div>
        )
    
}

class ClassComponentWithPropsState extends Component {
    constructor(props){
        super(props)
        this.state={
time:new Date().toLocaleTimeString()
        }
    }
    render(){
return(<div>
   <b>Props Value</b> {this.props.name}
   <b>State Value</b> {this.state.time}
                </div>)
    }
}


export default ClassComponentWithPropsState;
