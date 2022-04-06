import React from "react";


function FunctionClick(){
    function Eventhandler(){
        console.log("event is handled");
    }
    return(
        <button onClick={Eventhandler}>click</button>
    );
}

export default FunctionClick