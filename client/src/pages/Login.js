
import { useState } from 'react';
import './../index.css';
import { Link } from "react-router-dom";


function Login() {


  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:1011/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email, password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      console.log(`User ${data.user.name} Logged in successfully`);
      window.location.href='/profile'
    } else {
      console.log('Please check your email and password details');
    }
    //console.log(data);
    
  }

  function toRegister() {
    
  }

 

  return (

     
    

    <div className="main_page">
      <div className="container">
        
        <div className="login_form">

          <h1>Login</h1>
          <form className="login" onSubmit={loginUser}>
           
            
            <input
              value={email}
              onChange={(e)=>SetEmail(e.target.value)}
              type="text"
              placeholder="email"
              required="true"/>
            
            
            <input
              value={password}
              onChange={(e)=>SetPassword(e.target.value)}
              type="password"
              placeholder="password"
              required="true"/>

            <input class="button" type='submit' value='Login'/>
            
          </form> 

          <div className="register">
                <Link to="/register">Register</Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;
