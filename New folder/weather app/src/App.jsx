import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <div className="glass-container">
        <div className="glass-header">
          <h1>Weather Dashboard</h1>
          <SearchBar setWeatherData={setWeatherData} setLoading={setLoading} setError={setError} />
        </div>
        <div className="glass-content">
          <WeatherDisplay weatherData={weatherData} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;