
import { useState } from 'react';
import './../index.css';

function App() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:1011/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email, password,
      }),
    });

    const data = await response.json();
    console.log(data);
    
  }

  return (
    <div class="main_page">

      <div class="container">
        
        <div class="login_form">

          <h1>Login</h1>
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
