import React,{Component} from "react";

class Bind extends Component{

    constructor(props){
    super(props);

    this.state={
        message:"hi"
    }}

    eventhandle(){
        this.setState({
            message:'bye'
    })
    }

    render(){
        return (<div>
            {this.state.message}
            <button onClick={this.eventhandle.bind(this)}>Click Me</button>
            {/*onClick={()=>eventhandle()} */}
        </div>);
    }
}

export default Bind