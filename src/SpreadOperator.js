
import { useState } from "react"

const SpreadOperator=()=>{
    const[myObject,setMyObject]=useState({
        name:"narmada",age:34,degree:"MCA"
    })
    function changeFunction(){
        setMyObject((preObject)=>
            ({...preObject,
                name:preObject.name==="narmada"?"thapa":"narmada"}));
    }
    return(
        <div>
             <h1>Name:{myObject.name}, Age:{myObject.age}
                Degree: {myObject.degree}

             </h1>
             <button onClick={changeFunction}> Update</button>
        </div>
    )
}
export default SpreadOperator;