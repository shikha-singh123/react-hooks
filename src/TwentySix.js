
import { useState } from "react"

const TwentySix=()=>{
    const[myName,setMyName]=useState('binod thapa');
    const changeName=()=>{
        setMyName((preName)=>
            preName ==='binod thapa'?"Sachin" : "binod thapa"
        )
    }

    return(
    <div>
         <h1>{myName}</h1>
         <button onClick={changeName}>Click me please</button>
    </div>
)
}
export default TwentySix;