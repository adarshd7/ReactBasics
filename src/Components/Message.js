import React,{Component} from 'react'
class Message extends Component {
    constructor(){
        super()
        this.state={
            message:'visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'visited'
        })
    }
render(){
    return (<div><h1> Welcome  {this.state.message} </h1>
    <button onClick={()=>this.changeMessage()}> press </button></div>);

}
}

export default Message