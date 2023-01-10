import React from 'react'
import ComponentB from './ComponentB'

export const userContext = React.createContext();

function ComponentA(){

    return (
        <div>
            <userContext.Provider value={"Daniel"}>
                <ComponentB />
            </userContext.Provider>
        </div>
    )
}

export default ComponentA