import React from 'react'
import { useSelector } from 'react-redux'


const TotalCalories = (state) => {
    
 const cal=useSelector((state)=>state.calorie);
 console.log(cal);
 const total=parseInt(cal.reduce((prev,curr)=>curr.cal+prev,0));
  return (
    <div ><h1 className='text-center'>Total Calories</h1>
    <h2 className='text-center'>{total}</h2>
    </div>
    
  )
  };
  export default TotalCalories;