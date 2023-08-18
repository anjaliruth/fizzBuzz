import "./App.css";
import { useState } from "react";
import Authentication from "./components/Auth/Authentication";
import FizzBuzz from "./components/FizzBuzz/FizzBuzz";

function App() {
  const [user, setUser] = useState(null);

  function validUser(details) {
    setUser(details);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="FizzBuzzList">
      <h1 className="title">FizzBuzz List for BlckBx</h1>
      {/* Use ternary operator to render conditionally based on user authentiation */}
      {user ? (
  <div>
    {/* if user is authenticated, show FizzBuzz component and logout button */}
    <button onClick={handleLogout}>Logout</button>
    <FizzBuzz />
  </div>
) : (
  /* if user is not authenticated, show the Authentication component */
  <Authentication validUser={validUser} />
)}

    </div>
  );
}

export default App;
