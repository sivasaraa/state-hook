import React, { useEffect, useState } from 'react'

function HookInterval(){
    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("component updated")
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    },[])

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    return <h2>{count}</h2>
}

export default HookInterval