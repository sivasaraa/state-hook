import React from 'react'
import { userContext } from './ComponentA'

function ComponentC(){
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return (<div>User Loggedin is {user}</div>)
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC