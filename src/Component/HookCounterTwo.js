import React, { useState } from 'react';

function HookCounterTwo(){

    const [count, setCount] = useState(0);

    return (<div>
        Count : {count}
        <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>)
}

export default HookCounterTwo