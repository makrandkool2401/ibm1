import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contacts from "./components/Contacts/Contacts";


const Element = () => {
  return (
    <div>
    <App/>
    </div>
  )
}
ReactDOM.render(<Element/>,document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function

