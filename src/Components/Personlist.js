import React from 'react'
import Person from './Person'


function PersonList(){
    const personlist = [
        {
            name:'akshay',
            age:9

        },{
            name:'ammulu',
            age:7
        }
    ]

    const persons = personlist.map(person => <Person person={person}/>)
    return <div>{persons}</div>
}

export default PersonList