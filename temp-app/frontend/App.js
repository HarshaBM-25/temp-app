// frontend/App.js
import React, { useState } from "react";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const convert = () => {
    // ❌ BUG: wrong formula
    const f = (celsius * 2) + 32;
    setFahrenheit(f);
  };

  const saveData = async () => {
    await fetch("http://localhost:5000/save?temp=" + celsius); // ❌ insecure
  };

  return (
    <div>
      <h1>Temperature Converter</h1>

      <input
        type="text"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Enter Celsius"
      />

      <button onClick={convert}>Convert</button>

      <h2>Fahrenheit: {fahrenheit}</h2>

      <button onClick={saveData}>Save</button>
    </div>
  );
}

export default App;