
import { useState } from "react"

const UseState=()=>{
    const bioData=[
        {
            id:0,myName:'binod',age:26
        },
        {
            id:1,myName:'shalini',age:24
        },
        {
            id:2,myName:'heena',age:23
        }
        
    ]
    const [data,setData]=useState(bioData);
    const changeFunction=()=>{
        setData((preData)=>
            preData.length===0? bioData:[]
    )
        }
        const removeEle=(id)=>{
           const updatedData=data.filter((curEle)=>{
            return curEle.id!==id;
           })
           setData(updatedData);
        }
        // preData===data?[]:data);
    //preData always refer to current State .
    return(
        <div>
            {
           data.map((curEle)=>(
            <h1 key={curEle.id}>
                name:{curEle.myName}, age:{curEle.age}
                <button onClick={()=>removeEle(curEle.id)}> Remove </button>
                
                </h1>
           ))
            }
            <button onClick={changeFunction}> Click me</button>
           </div>
    )
}
export default UseState;