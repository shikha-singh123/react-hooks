
import { useState ,useEffect} from "react"

const UseEffect=()=>{
   const[count,setCount]=useState(0);
   useEffect(()=>{
    if(count>=1){
        document.title=`Chats & (${count})`
    }else{
        document.title=`Chats`

    }

   });
    return(
        <div>
           <h1>{count}</h1>
           <button onClick={()=>setCount(count+1)}>Click</button>
           </div>
    )
}
export default UseEffect;