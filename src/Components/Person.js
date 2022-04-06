import React from 'react'

function Person({person}){

    return(<div>
        <h1>I am {person.name}</h1>
        <h1>age is {person.age}</h1>
    </div>)

}

export default Person