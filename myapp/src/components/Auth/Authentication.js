import { useState } from 'react';


export default function Authentication() {

  // create states for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  return (
    <div>
{/* use a ternary operator to check if the correct credentials has been added */}
{/* If not, show login input fields, if yes, say Welcome!*/}
  
        <div>
          <input
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </div>

    </div>
  );
}
