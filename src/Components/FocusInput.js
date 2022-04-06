import React,{Component} from 'react'

class FocusInput extends Component{

    constructor(props){
        super(props)
        this.componenttRef=React.createRef()
    }

    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }

    render(){
        return (
            <div>
                <input type="text" ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput