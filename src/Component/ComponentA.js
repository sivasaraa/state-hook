import React from 'react'
import ComponentB from './ComponentB'

export const userContext = React.createContext();

export const channelContext = React.createContext();

function ComponentA(){

    return (
        <div>
            <userContext.Provider value={"Daniel"}>
                <channelContext.Provider value={"NewZealand"}>
                    <ComponentB />
                </channelContext.Provider>
            </userContext.Provider>
        </div>
    )
}

export default ComponentA