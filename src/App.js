import React from 'react'
import Card from './Card.js'
import {robots} from './robots.js'

const App = () => {
    return(
        <>
           <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}  />
        </>
    )
}

export default App