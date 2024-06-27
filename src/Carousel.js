import { useState } from "react";


const data=["https://th.bing.com/th?id=OIP.N0lA6ILJWM7ZUD0NavkhNQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
"https://th.bing.com/th?id=OIP.U6bH1w7Z-FkI525Rjw_F7AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
"https://th.bing.com/th?q=Small+Link+Legend+of+Zelda&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
"https://th.bing.com/th/id/OIP.AhtbAh9VYtoJ_8wiljRSCwHaGa?w=182&h=180&c=7&r=0&o=5&pid=1.7",
"https://th.bing.com/th?q=Fierce+Deity+Link&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
];



const Carousel=()=>{
const [imageIndex,setImageIndex]=useState(0);
const handlePreClick=()=>{
    if(imageIndex===0) setImageIndex(data.length-1);
   else setImageIndex(imageIndex-1);
}
const handleNextClick=()=>{
   setImageIndex((imageIndex+1)% data.length);
}
    return(
         <div>
            <button onClick={handlePreClick}>Previous</button>
               <img src={data[imageIndex]} style={{width:'300px'}} alt="wallpaper"/>
            <button onClick={handleNextClick}>Next</button>
           </div>
    )
}
export default Carousel; 