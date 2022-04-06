import React, { Component } from "react"


class Welcome extends Component{
    render(){
        const {name,className}=this.props
        return <h1>welcome to react   {name} and {className}</h1>;
    }
}

export default Welcome