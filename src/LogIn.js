
import { useState } from "react"

const LogIn=()=>{
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
    
   const [allEntry,setAllEntry]=useState([]);
    const submitButton=(e)=>{
        e.preventDefault();
        if(email && password){
        const newEntry={id:new Date().getTime().toString() ,email:email,password:password};

        setAllEntry([...allEntry,newEntry]);
        setEmail("");
        setPassword("");
    }else{
        alert("Plz fill the date");
    }
}
    return(
   <>
         <form onSubmit={submitButton}>
            <div>

             <label htmlFor="email">Email</label> 
             <input type="text" placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
             </div>
            <div>

             <label htmlFor="password">Password</label> 
             <input type="" placeholder="Password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             />
             </div>
             <button onClick={submitButton}>Submit</button>

         </form>
         <div>
            {
                allEntry.map((curEle)=>{
                    const {id,email,password}=curEle;
                    return(
                        <div key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                        </div>
                    )
                })
            }
         </div>
   </>
)
}
export default LogIn;