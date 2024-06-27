import React from 'react';
import ReactDOM from 'react-dom';
import { FirstName,LastName } from './App';
const ComC=()=>{
    return (
         <React.Fragment>
             <FirstName.Consumer>
                  {(fname)=>{
                    return (
                    <LastName.Consumer>
                    {(lname)=>{
                      return(
                        <h1>My name is {fname} {lname}</h1>
                      )
                    }}
                    </LastName.Consumer>
                    )
                 }}
             </FirstName.Consumer>
         </React.Fragment>
    );
};
export default  ComC;