import React, { Component } from "react";

class Form extends Component{
    constructor(props){
    super(props)

    this.state = {
        username:''
    }

    this.state = {
        comment:''
    }
    this.state = {
        topic:'react'
    }

}


handleChangeUsername = event =>
{
this.setState({
    username:event.target.value
})
}

handleChangeComment = event =>
{
this.setState({
    comment:event.target.value
})
}

display=()=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
}
render(){
    return(
    <form>
        <div>
            <label>username</label>
            <input type='text' value={this.state.username} onChange={this.handleChangeUsername}/>
        </div>
        <div>
            <label>comments</label>
            <textarea  value={this.state.comment} onChange={this.handleChangeComment}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic}>
                <option value='react'>React</option>
                <option value='angular'>angular</option>
            </select>
        </div>
        <button type='submit' onClick={this.display}>submit</button>
    </form>)


}
}

export default Form