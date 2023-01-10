import React, { useContext, useReducer } from 'react'
import ComponentC from './ComponentC'
import { userContext, channelContext } from './ComponentA'

function ComponentB(){
    const user = useContext(userContext)
    const channel = useContext(channelContext)
    
    return (
        <div>
            <ComponentC />
            <div>{user} - {channel}</div>
        </div>
    )
}

export default ComponentB