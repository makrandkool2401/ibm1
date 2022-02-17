import React,{useState} from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import "./App.css";
import Tweet from './components/Twitter/Tweet';
import Tweets from './components/Twitter/Tweets';
const App = () => {
return(
    // <div className='container' >
    // {/* <h1>Beverages</h1>
    // <Navbar firstBev="Coffee" secondBev="Tea"/> */}
    // <Card title="Today's Money" num="$56,789" logo="Logo One"/>
    // <Card title="Today's Users" num="8789" logo="Logo Two"/>
    // <Card title="New Clients" num="#89" logo="Logo Three"/>
    // <Card title="Sales" num="$87,589" logo="Logo Four"/>
    // </div>
    <>
    <Tweets/>
    </>
    
)

    // const [count,setCount]=useState({
    //     count1:0,
    //     count2:1
    // });
    // console.log(count); 

    // const handleClick=()=>{
    //     setCount({...count,count1:count.count1+1 });
    //     console.log(count);
    // }

    // const handleClickOne=()=>{
    //     setCount({...count,count1:count.count1-1})
    // }

    // const handleClick=(countValue)=>{
    //     if(countValue===1){
    //         setCount({...count,count1:count.count1+1})
    //     }
    //     else if(countValue===2){
    //         setCount({...count,count2:count.count2+2})
    //     }
    // }

//   return (
//     <>
    
//     {/* <button onClick={handleClick}>Increment Me</button>
//     <h1>{count.count1}</h1>
    
//     <button onClick={handleClickOne}>Decrement Me</button> */}
//     <h1>{count.count1}</h1>
//     <button onClick={()=>handleClick(1)}>+1</button>
//     <h1>{count.count2}</h1>
//     <button onClick={()=>handleClick(2)}>+2</button>
//     </>
//   )
}

export default App