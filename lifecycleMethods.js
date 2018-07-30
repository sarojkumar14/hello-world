import React, { Component } from 'react';
export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state={
value:'dd'
        }
        console.log("Parent constructor Called");
        this.handleChange=this.handleChange.bind(this);
    }

    componentWillMount(){
        console.log("Parent componentWillMount method Called");  
    }

    componentWillReceiveProps(){
        console.log("Parent componentWillReceiveProps method Called"); 
    }
shouldComponentUpdate(){
    console.log("Parent shouldComponentUpdate method Called"); 
    return true;
}
componentWillUpdate(){
    console.log("Parent componentWillUpdate method Called"); 
}
    componentDidMount(){
        console.log("Parent componentDidMount method Called");  
    }

    handleChange(e){
        e.preventDefault();
        this.setState({value:e.target.value});

    }

    componentDidUpdate(){
        console.log("Parent componentDidUpdate method Called"); 
    }
    componentWillUnmount(){
        console.log("Parent componentWillUnmount method Called");   
    }
    render(){
     
return(<div>
    {    console.log("Parent render   method Called")}
   <label>Parent State</label> <input type="text" value={this.state.value} onChange={this.handleChange} />
    {
        
   <Child value={this.state.value} handleChange={this.handleChange} />

}
                </div>)
    }
}


class Child extends Component {
    constructor(props){
        super(props)
        this.state={
value:''
        }
        console.log("Child constructor Called");
        this.handleChange=this.handleChange.bind(this);
    }

    componentWillMount(){
        console.log("Child componentWillMount method Called");  
    }

    componentWillReceiveProps(){
        console.log("Child componentWillReceiveProps method Called"); 
    }
shouldComponentUpdate(){
    console.log("Child shouldComponentUpdate method Called"); 
    return true;
}
componentWillUpdate(){
    console.log("Child componentWillUpdate method Called"); 
}
    componentDidMount(){
        console.log("Child componentDidMount method Called");  
    }

    handleChange(e){
        e.preventDefault();
        this.setState({value:e.target.value});

    }
    componentDidUpdate(){
        console.log("Child componentDidUpdate method Called"); 
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount method Called");   
    }

    render(){
     
return(<div>
    {    console.log("Child render   method Called")}
   <label>Child State</label> <input type="text" value={this.state.value} onChange={this.handleChange} />
  
 
 <label>Child Props</label> <input type="text" value={this.props.value} onChange={this.props.handleChange} />
{
this.props.value=="Test"?<UnMountTest1 />:<UnMountTest2 />
}
                </div>)
    }
}


class UnMountTest1 extends Component{
    componentWillUnmount(){
        console.log("UnMountTest1 componentWillUnmount method Called");   
    }
    render(){
        return((<div>
            UnMountTest1
            {    console.log("UnMountTest1 render   method Called")}
                        </div>))
    }
}
class UnMountTest2 extends Component{
    componentWillUnmount(){
        console.log("UnMountTest2 componentWillUnmount method Called");   
    }
    render(){
        return((<div>
            UnMountTest2
            {    console.log("UnMountTest2 render   method Called")}
                        </div>))
    }
}
