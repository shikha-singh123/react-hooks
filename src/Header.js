import { useState } from "react";

const Header=({name})=>{
    const[name1,setName1]=useState("Tony Stark")
//   function handleChange(){
//     setName1(preName=>(preName==="Tony Stark"? "XYZ" : "Tony Stark"));

//   }
    return(
        <div>
         <h1>Hello {name1} from {name}</h1>
         <button onClick={()=>{
            setName1("XYZ")
         }}>Change Name</button>
        </div>
    )
}
export default Header;