import React, { useEffect, useState } from 'react'

function HookMouse(){
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const mouseposition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect call")
        window.addEventListener('mousemove', mouseposition)

        return () => {
            console.log("component unmounted")
            window.removeEventListener('mousemove', mouseposition)
        }
    },[])

    return (<div>X - {x} Y - {y}</div>)
}

export default HookMouse;