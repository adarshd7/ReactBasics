import React,{Component} from "react";
import ChildComponent from './ChildComponent';
class ParentComponent extends Component{
    constructor(props){
    super(props);

    this.state={
        message:'Parent'
    }
    this.greetParent=this.greetParent.bind(this)
    }

    greetParent(child){
        alert(`hello ${this.state.message} from ${child}`);
    }

    render(){
      return (<ChildComponent greethandler={this.greetParent}/>);
    }
}

export default ParentComponent