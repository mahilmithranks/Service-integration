import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    const res = await fetch(`http://localhost:7000/notify?city=${city}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="page">
      <h1 className="title">☁️ Weather Checker</h1>

      <div className="card">
        <input
          className="input"
          type="text"
          placeholder="Enter city (e.g., Chennai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="btn" onClick={fetchWeather}>
          Check Weather
        </button>

        {data && (
          <div className="weather-box">
            <h2>{data.city}</h2>
            <p><strong>Temperature:</strong> {data.temperature}°C</p>
            <p><strong>Condition:</strong> {data.condition}</p>
            <p className="message">{data.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
