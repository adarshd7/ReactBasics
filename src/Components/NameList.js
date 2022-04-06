import React from 'react'

function NameList(){

    const names=['ada','r','sh']
    const namelist=names.map(name=><h1>{name}</h1>)
    return <div>{namelist}</div>
}

export default NameList

