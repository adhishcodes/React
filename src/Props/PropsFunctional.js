import React from "react";
export default function PropsFunctional(props)
{
    return (
        <div>
             <h1>PARKS AND RECS</h1>
             <h2> Name : {props.name}</h2>
             <h2> Age : {props.age}</h2>
        </div>

    )
}
PropsFunctional.defaultProps={name:"RON SWANSON" , age:"40"}
