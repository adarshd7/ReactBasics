import React, { Component } from 'react'


class UserGreeting extends Component {
        constructor(props){
        super(props)

    this.state={
        isLoggedIn: true
    }
}

render(){
  
    if(this.state.isLoggedIn)
    {
       return <div>hello logged in</div>
    }
    else{
       return <div>loggedoff</div>
    }
    
    
}
}

export default UserGreeting


