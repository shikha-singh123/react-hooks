import { useContext } from "react";
import React from "react";
import { LoginContext } from "./App";
const SinglePost=()=>{

    const login=useContext(LoginContext)
    return(

        <div>
            SinglePost
        </div>
    )
};
export default SinglePost;