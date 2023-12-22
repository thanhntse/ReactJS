import React, { useEffect, useState } from 'react'

export default function Header(props) {
    const [cnt, setCnt] = useState(0)
    let a = 1;
    let b = <span>123</span>
    let c = [<span>123</span>, <span>123</span>, <span>123</span>]
    let d = { m: 6 }

    const Up = () => { setCnt(pre => pre +1 ) }

    useEffect(() => {
        // console.log("DidMount")
        console.log("DidUpdate")
    })

    useEffect(() => {
        console.log("CNT watcher")
        if(cnt>10){
            setCnt(10)
        }
    }, [cnt])
    
    useEffect(() => {
        console.log("DidMount");
        return () => {
            console.log("Unmount");
        }
    }, [])

    return (
        <div>
            <h1>{cnt}</h1>
            <button onClick={Up}>Click to up</button>
            {JSON.stringify(props)}
            <h1>{props.name}</h1>
            <h1>{c}</h1>
            {b}
            Header
        </div>
    )
}
