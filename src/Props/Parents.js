import React, { useState } from 'react'

export default function Parent()
{
    const [Uni,setUni] = useState("SKCET")
    return (
        <div>
            <h1>my college is {Uni}</h1>

            <button onClick={()=>setUni("PSG")}>click me</button>
        </div>
    )
}