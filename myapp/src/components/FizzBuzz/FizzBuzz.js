import { useState, useEffect } from "react";

export default function FizzBuzz() {
  //create state to store the incoming data from API, and the default state is an empty array
  const [fizzBuzzData, setFizzBuzzData] = useState([]);

  //use useEffect hook to ensure that data is fetched from the backend at a desired time
  // this 'time' mentioned above will be after the component mounts, and will only render after the component is mounted. (Done so by a second argument of [] in this useEffect hook. )
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:5001/fizzbuzz");
      const data = await response.json();
      // Store incoming data from the backend in a state
      setFizzBuzzData(data);
      console.log(data);
    }

    fetchData();
  }, []);

  function getStyle(value) {
    let color = "black";
    let fontSize = "14px";

    if (value === "Fizz") {
      color = "green";
      fontSize = "18px";
    } else if (value === "Buzz") {
      color = "blue";
      fontSize = "24px";
    } else if (value === "FizzBuzz") {
      color = "purple";
      fontSize = "32px";
    }

    return { color: color, fontSize: fontSize };
  }
  return (
    <div>
      <div className="results">
        {/* map over the data that has come in from the API */}
        {fizzBuzzData.map((item, index) => (
          <p key={index} style={getStyle(item)}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
