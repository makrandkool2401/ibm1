 import React,{Component} from "react";
 import  ReactDOM  from "react-dom";
import App from './App'
import Web from "./Web";

// class Greet extends React.Component{
//   render(){
//     return React.createElement("h1", null, "Hello");
//   }
// }

// ReactDOM.render(<Greet/>,document.getElementById('root'));

// import React from 'react'

const Element = () => {
  return(
    <>
    <App/>
    </>
  )
  // const newArray=[1,2,3,4,5,6,7];
  // const fName="Makrand";
  // const num=19;
  // const res=num%2;
  // const od="odd";
  // const ev="Even";
  // if(res===0){
  //   return(<h1>{ev}</h1>);
  // }
  // else{
  //   return(<h1>{od}</h1>);
  // }
  // return (
  
  
  //   <React.Fragment>
    
  //   <h1>HI,{fName}</h1>
  //    </React.Fragment>
  // )
  // return (
  //   newArray.map((num) => (
  //     <h3>{num}</h3>
  //   ))
  // )
  
}

ReactDOM.render(<Element/>,document.getElementById('root'));

