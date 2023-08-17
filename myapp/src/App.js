
import './App.css';
import Authentication from './components/Auth/Authentication';
import FizzBuzz from './components/FizzBuzz/FizzBuzz';

function App() {
  return (
    <div className="FizzBuzzList">
         <h1 className='title'>FizzBuzz List for BlckBx</h1>
      {/* <FizzBuzz/> */}
      <Authentication/>
    </div>
  );
}


export default App;
