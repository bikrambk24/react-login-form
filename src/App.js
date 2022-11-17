import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For 'Logged in successfully'
  const [notice, setNotice] = useState(""); // For 'Please Login'

  const handleUser = (event)=>{
    const user = event.target.value;
    setUsername(user);
    }

    const handlePass = (event)=>{
      const pass = event.target.value;
      setPassword(pass);
      }

      useEffect(() => {
        setTimeout(() => {
          setNotice("Please Login")}, 1000);
      }, []);
  

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent page reload

          if(username === "admin" && password === "admin"){
            setMessage("Logged in successfully");
          } else {
            setMessage("Login Failed")
          }
    
    }

  return (
    <>
    <br/><br/>
      <center>
      <div>
            <h1>{notice} </h1>
            <form onSubmit={handleSubmit}>
            
              <label htmlFor="username">Username: </label>
              <input type="text" value={username} onChange={handleUser} /> <br/><br/>

              <label htmlFor="password">Password: </label>
              <input type="text" value={password} onChange={handlePass} /> <br/><br/>
              <button type="submit">Login</button>
          
            </form>
            <h2>{message}</h2>
        </div>
      </center>
    </>
  );
  

}

export default App;

