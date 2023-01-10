import React from 'react'
import { userContext, channelContext } from './ComponentA'

function ComponentC(){
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return <channelContext.Consumer>
                            {
                                channel => {
                                    return (<div>User Loggedin is {user} and from {channel}</div>)
                                }
                            }
                        </channelContext.Consumer>
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponentC