import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



 const Element = () => {
  return (
    <div>
    <App/>
    </div>
  )
}
ReactDOM.render(<Element/>,document.getElementById('root'));