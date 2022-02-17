import React from 'react'

const Navbar = (props) => {
    console.log(props)
  return (
    <ul>
        <li>{props.firstBev}</li>
        <li>Coffee?</li>
        <li>{props.secondBev}</li>

    </ul>
  )
}

export default Navbar