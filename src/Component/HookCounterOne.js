import React, { useEffect, useState } from 'react'

function HookCounterOne(){

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("values updated");
        document.title = `you click ${count} times`
    },[count])

    return (<div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => setCount(prev => prev + 1)}>{count} times</button>
    </div>)
}

export default HookCounterOne