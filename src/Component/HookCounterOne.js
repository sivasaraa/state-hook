import React, { useEffect, useState } from 'react'

function HookCounterOne(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you click ${count} times`
    })

    return (<div>
        <button onClick={() => setCount(prev => prev + 1)}>{count} times</button>
         
    </div>)
}

export default HookCounterOne