import React,{useContext} from 'react';
import ReactDOM from 'react-dom';
import ComC from './ComC';
import { FirstName } from './App';
const ComB=()=>{
    const fname=useContext(FirstName);
    return (
       <h1>My name is {fname}</h1>
    );
};
export default  ComB;