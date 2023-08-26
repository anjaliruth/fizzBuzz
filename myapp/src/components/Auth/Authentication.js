import { useState } from "react";

// Move the dummyDataUsers outside of the component function
const dummyDataUsers = [{ email: "test@gmail.com", password: "fizzbuzz" }];

export default function Authentication({ validUser }) {
  // create states for username and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin() {
    const approvedUser = dummyDataUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (approvedUser) {
      setIsAuthenticated(true);
      validUser(approvedUser);
    } else {
      alert("Either your username or password is incorrect. Please try again.");
    }
  }

  return (
    <div>
      {/* use a ternary operator to check if the user is authenticated*/}
      {isAuthenticated ? (
        <p>Welcome!</p>
      ) : (
        <div className="loginInput">
        {/* display,login form for non-authenticated users */}
        <p>Please enter your details to view the magic of <span className="fizzbuzz">FizzBuzz</span></p>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
{/* call the handleLogin function here to check the login credentials*/}
          <button onClick={handleLogin}>Login</button>
          <div className="loginDetails">
            <p>Demo Email: test@gmail.com</p>
            <p>Password: fizzbuzz</p>
          </div>
        </div>
      )}
    </div>
  );
}
