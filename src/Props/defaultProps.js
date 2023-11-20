import React from "react"

export default function Greeting(props)
{
    return(
        <div>
            <h2>Name : {props.uni}</h2>
            <h2>Class : {props.class}</h2>
            <h2>Year :{props.food}.</h2>
            <h2>Reg no:{props.dish}.</h2>
        </div>
    )
}

Greeting.defaultProps={  uni:"ADHISH S R" , class:"CSE A" , food:" II YEAR " , dish:" 727722EUCS006 "}