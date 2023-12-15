
import { useState } from 'react';
import './../index.css';

function App() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:1011/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name, email, password,
      }),
    });

    const data = await response.json();
    console.log(data);
    
  }

  async function loginUser() {
    
  }

  return (
    <div class="main_page">

      <div class="container">
        <div class="register_form">

          <h1>Register</h1>
          <form class="register" onSubmit={registerUser}>
            <input
              value={name}
              onChange={(e)=>SetName(e.target.value)}
              type="text"
              placeholder="nickname"
              required="true" />
            
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

            <input class="button" type='submit' value='Register'/>
            
          </form>

        </div>



        <div class="login_form">

          <h1>Register</h1>
          <form class="login" onSubmit={loginUser}>
           
            
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

</div>
      </div>
    </div>
  );
}

export default App;
