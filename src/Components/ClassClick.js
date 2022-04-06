import React,{Component} from "react";

class ClassClick extends Component{
    Eventhandle(){
        console.log("class click ");
    }
    render(){
        return (<div><button onClick={this.Eventhandle}>Click Me for Class Click</button></div>);
    }
}

export default ClassClick