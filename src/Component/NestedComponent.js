import React from "react";
function Display()
{
    return(
        <div>
            <h1>Nested Component</h1>
        </div>
    )
}
function Display2()
{
    return(
        <div>
            <h1>Nested Component</h1>
        </div>
    )
}

export default function NestedComponent()
{
    return (
        <div>
           <Display/>
           <Display2/>
        </div>
    )
}