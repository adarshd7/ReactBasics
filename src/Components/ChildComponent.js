import React from "react";

function ChildComponent(props){
        
        return(<button onClick={()=>props.greethandler('child')}>Greet Parent</button>);
        
}

export default ChildComponent