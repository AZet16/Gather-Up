
import { useState } from 'react';
import './../index.css';
import { Link } from "react-router-dom";


function App() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:1011/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

      body: JSON.stringify({
        name, email, password
      })
    });

    const data = await response.json();


    console.log(data);

    SetName('');
    SetEmail('');
    SetPassword('');
    
  }

  

  return (
    <div className="main_page">

      <div className="container">
        <div className="register_form">

          <h1>Register</h1>
          <form className="register" onSubmit={registerUser}>
            <input
              value={name}
              onChange={(e)=>SetName(e.target.value)}
              type="text"
              placeholder="nickname"
              required="true" />
            
            <input
              value={email}
              onChange={(e)=>SetEmail(e.target.value)}
              type="email"
              placeholder="email"
              required="true"/>
            
            
            <input
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
              type="password"
              placeholder="password"
              required="true"/>

            <input class="button" type='submit' value='Register'/>
            
          </form>

          <div className="login">
                <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
