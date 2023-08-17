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
      {user ? (
        <div>
        <button onClick={handleLogout}>Logout</button>
          <FizzBuzz />
        </div>
      ) : (
        <Authentication validUser={validUser} />
      )}
    </div>
  );
}

export default App;
