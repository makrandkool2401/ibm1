import React, { useState,useEffect } from 'react'
import Contacts from "./components/Contacts/Contacts"


const App = () => {
    // const [info,setInfo]=useState("");
  //   const fetchdata=fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(res=>{setInfo(res)});
  //   useEffect(()
  //   =>{
  //       fetchdata()  
  //   },[]);
  //   // console.log()
  // return (
  //   <>
  //   <h1>{info.map(el=>el.name)}</h1>
  //   </>
  // )
  // const handleClick=(event)=>{
  //   event.preventDefault();
  //   console.log("Button is clicked")
  // }
  // const handleChange=(event)=>{
  //   console.log(event.target.value);
  //   setInfo(event.target.value);
  // }
  const [newName,setNewName]=useState("")

  const [newEmail,setNewEmail]=useState("")

  const [contacts,setContacts]=useState([
    {name:"Ram",email:"r@r.com"},
    {name:"Sam",email:"s@r.com"},
    {name:"Yam",email:"y@r.com"},

  ])
  // console.log(contacts);  

  const handleNameChange=(event)=>{
    setNewName(event.target.value);
  }

  const handleEmailChange=(event)=>{
    setNewEmail(event.target.value);
  }
  const handleContactSubmit=()=>{
    setContacts([...contacts,{name:newName,email:newEmail}]);
    setNewName("");
    setNewEmail("");
  }

  const handleDelete=(emailId)=>{
    const newContacts=contacts.filter(item=>item.email!==emailId);
    setContacts(newContacts);
  }

  const handleEdit=(emailId)=>{
    const newContacts=[...contacts];
    const index=newContacts.findIndex(el=>el.email==emailId);
    newContacts[index]={name:newName,email:newEmail};
    setContacts(newContacts);
    setNewName("");
    setNewEmail("");

  }

  // console.log(contacts);
  return(
    <>
    <div className="container">
    <form>
      
      
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Full Name" aria-label="Full name" onChange={handleNameChange} value={newName}/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange} value={newEmail} />
          </div>
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={handleContactSubmit}>Add Contact</button>
      
    </form>
    </div>
    <Contacts contacts ={contacts} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )
}

export default App