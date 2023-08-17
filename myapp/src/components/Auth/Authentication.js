import { useState } from "react";

// Move the dummyDataUsers outside of the component function
const dummyDataUsers = [{ email: "123@test.com", password: "123" }];

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
      {/* use a ternary operator to check if the correct credentials have been added */}
      {/* If not, show login input fields; if yes, say Welcome! */}
      {isAuthenticated ? (
        <p>Welcome!</p>
      ) : (
        <div>
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
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
