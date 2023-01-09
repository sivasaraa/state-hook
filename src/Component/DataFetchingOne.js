import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingOne(){
    const[post, setPost] = useState({})
    const[id, setId] = useState(1)
    const[idButton, setIdButton] = useState(1)

    useEffect(() => {
        console.log("updated")
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`).then((res) => {
            setPost(res.data)
        }).catch((err) => {
            console.log(err);
        })
    },[idButton])

    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)}/>
            <button onClick={() => setIdButton(id)}>Get Result</button>
            <div>{post.title}</div>
        </div>
    )

}

export default DataFetchingOne