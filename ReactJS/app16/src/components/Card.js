import React from 'react'
import "./Card.css" 
const Card = (props) => {
    console.log(props)
  return (
    <div className='container'>
        <div className='one'>
            {/* <h6>Today's Money</h6> */}
            <h6>{props.title}</h6>
            {/* <h4>$56,000</h4> */}
            <h4>{props.num}</h4>
        </div>
        <div className='two'>
            {/* Logo One */}
            {props.logo}
        </div>

    </div>
  )
}

export default Card