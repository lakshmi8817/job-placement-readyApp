import React from 'react';

const WeatherDisplay = ({ weatherData, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!weatherData) {
    return (
      <div className="welcome-message">
        <h2>Welcome to the Weather Dashboard</h2>
        <p>Search for a location to get current, forecast, historical, marine, or location-specific weather data.</p>
      </div>
    );
  }

  // Determine which type of data to display based on available properties
  if (weatherData.current) {
    return <CurrentWeather weatherData={weatherData} />;
  } else if (weatherData.location) {
    return <LocationWeather weatherData={weatherData} />;
  } else if (weatherData.forecast) {
    return <ForecastWeather weatherData={weatherData} />;
  } else if (weatherData.historical) {
    return <HistoricalWeather weatherData={weatherData} />;
  } else if (weatherData.marine) {
    return <MarineWeather weatherData={weatherData} />;
  } else {
    return <div>No weather data available</div>;
  }
};

const CurrentWeather = ({ weatherData }) => {
  const { location, current } = weatherData;
  
  return (
    <div className="weather-display">
      <div className="weather-card current-weather-card">
        <h2>Current Weather</h2>
        <div className="current-weather">
          <div className="weather-icon">
            <img 
              src={current.weather_icons[0]} 
              alt={current.weather_descriptions[0]} 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="current-temp">{current.temperature}°C</div>
          <div className="current-details">
            <div className="current-location">{location.name}, {location.country}</div>
            <div className="current-condition">{current.weather_descriptions[0]}</div>
            <div className="current-time">Last Updated: {current.observation_time}</div>
          </div>
        </div>
        
        <div className="weather-info">
          <div className="weather-info-item">
            <span>Feels Like:</span>
            <span>{current.feelslike}°C</span>
          </div>
          <div className="weather-info-item">
            <span>Humidity:</span>
            <span>{current.humidity}%</span>
          </div>
          <div className="weather-info-item">
            <span>Wind Speed:</span>
            <span>{current.wind_speed} km/h</span>
          </div>
          <div className="weather-info-item">
            <span>Wind Direction:</span>
            <span>{current.wind_dir}</span>
          </div>
          <div className="weather-info-item">
            <span>Pressure:</span>
            <span>{current.pressure} mb</span>
          </div>
          <div className="weather-info-item">
            <span>Precipitation:</span>
            <span>{current.precip} mm</span>
          </div>
          <div className="weather-info-item">
            <span>Visibility:</span>
            <span>{current.visibility} km</span>
          </div>
          <div className="weather-info-item">
            <span>UV Index:</span>
            <span>{current.uv_index}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForecastWeather = ({ weatherData }) => {
  const { location, forecast } = weatherData;
  
  return (
    <div className="weather-display">
      <div className="weather-card forecast-weather-card">
        <h2>5-Day Forecast for {location.name}, {location.country}</h2>
        <div className="weather-grid">
          {Object.entries(forecast.forecastday || {}).slice(0, 5).map(([date, dayData]) => (
            <div key={date} className="weather-card">
              <h3>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
              <div style={{ textAlign: 'center', margin: '15px 0' }}>
                <img 
                  src={dayData.day.condition.icon} 
                  alt={dayData.day.condition.text} 
                  style={{ width: '60px', height: '60px' }}
                />
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: '10px 0' }}>
                  {dayData.day.avgtemp_c}°C
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '10px' }}>
                  {dayData.day.condition.text}
                </div>
              </div>
              <div className="weather-info">
                <div className="weather-info-item">
                  <span>Max Temp:</span>
                  <span>{dayData.day.maxtemp_c}°C</span>
                </div>
                <div className="weather-info-item">
                  <span>Min Temp:</span>
                  <span>{dayData.day.mintemp_c}°C</span>
                </div>
                <div className="weather-info-item">
                  <span>Humidity:</span>
                  <span>{dayData.day.avghumidity}%</span>
                </div>
                <div className="weather-info-item">
                  <span>Rain Chance:</span>
                  <span>{dayData.day.daily_chance_of_rain}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoricalWeather = ({ weatherData }) => {
  const { location, historical } = weatherData;
  
  return (
    <div className="weather-display">
      <div className="weather-card historical-weather-card">
        <h2>Historical Weather for {location.name}, {location.country}</h2>
        <div className="weather-grid">
          {Object.entries(historical || {}).slice(0, 5).map(([date, dayData]) => (
            <div key={date} className="weather-card">
              <h3>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
              <div style={{ textAlign: 'center', margin: '15px 0' }}>
                <img 
                  src={dayData.hourly[12].weather_icons[0]} 
                  alt={dayData.hourly[12].weather_descriptions[0]} 
                  style={{ width: '60px', height: '60px' }}
                />
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: '10px 0' }}>
                  {dayData.hourly[12].tempC}°C
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '10px' }}>
                  {dayData.hourly[12].weather_descriptions[0]}
                </div>
              </div>
              <div className="weather-info">
                <div className="weather-info-item">
                  <span>Time:</span>
                  <span>{dayData.hourly[12].time}</span>
                </div>
                <div className="weather-info-item">
                  <span>Humidity:</span>
                  <span>{dayData.hourly[12].humidity}%</span>
                </div>
                <div className="weather-info-item">
                  <span>Wind Speed:</span>
                  <span>{dayData.hourly[12].windspeedKmph} km/h</span>
                </div>
                <div className="weather-info-item">
                  <span>Visibility:</span>
                  <span>{dayData.hourly[12].visibility} km</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MarineWeather = ({ weatherData }) => {
  const { location, marine } = weatherData;
  
  // Marine weather data structure may vary, so we'll handle it conditionally
  if (!marine || !marine.weather) {
    return (
      <div className="weather-display">
        <div className="weather-card marine-weather-card">
          <h2>Marine Weather for {location?.name || 'Selected Location'}</h2>
          <p>Marine weather data not available for this location.</p>
          <p>Please try a coastal or ocean location for marine weather data.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="weather-display">
      <div className="weather-card marine-weather-card">
        <h2>Marine Weather for {location.name}, {location.country}</h2>
        <div className="weather-grid">
          {(marine.weather || []).slice(0, 5).map((dayData, index) => (
            <div key={index} className="weather-card">
              <h3>{new Date(dayData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
              <div style={{ textAlign: 'center', margin: '15px 0' }}>
                <img 
                  src={dayData.hourly[12]?.weather_icon || ''} 
                  alt={dayData.hourly[12]?.weather_description || 'Weather'} 
                  style={{ width: '60px', height: '60px' }}
                />
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', margin: '10px 0' }}>
                  {dayData.hourly[12]?.tempC || 'N/A'}°C
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '10px' }}>
                  {dayData.hourly[12]?.weather_description || 'Weather Data Unavailable'}
                </div>
              </div>
              <div className="weather-info">
                <div className="weather-info-item">
                  <span>Sea Temperature:</span>
                  <span>{dayData.hourly[12]?.seaSurfaceTempC || 'N/A'}°C</span>
                </div>
                <div className="weather-info-item">
                  <span>Wave Height:</span>
                  <span>{dayData.hourly[12]?.significantWaveHeight_m || 'N/A'} m</span>
                </div>
                <div className="weather-info-item">
                  <span>Wave Period:</span>
                  <span>{dayData.hourly[12]?.swellPeriod_secs || 'N/A'} s</span>
                </div>
                <div className="weather-info-item">
                  <span>Wave Direction:</span>
                  <span>{dayData.hourly[12]?.swellDir_deg || 'N/A'}°</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LocationWeather = ({ weatherData }) => {
  const { location, current, locationQuery } = weatherData;
  
  return (
    <div className="weather-display">
      <div className="weather-card location-weather-card">
        <h2>Location Details for "{locationQuery}"</h2>
        <div className="weather-grid">
          <div className="weather-card">
            <h3>Location Information</h3>
            <div className="weather-info">
              <div className="weather-info-item">
                <span>Name:</span>
                <span>{location.name}</span>
              </div>
              <div className="weather-info-item">
                <span>Region:</span>
                <span>{location.region}</span>
              </div>
              <div className="weather-info-item">
                <span>Country:</span>
                <span>{location.country}</span>
              </div>
              <div className="weather-info-item">
                <span>Latitude:</span>
                <span>{location.lat}</span>
              </div>
              <div className="weather-info-item">
                <span>Longitude:</span>
                <span>{location.lon}</span>
              </div>
              <div className="weather-info-item">
                <span>Timezone:</span>
                <span>{location.timezone_id}</span>
              </div>
              <div className="weather-info-item">
                <span>Local Time:</span>
                <span>{location.localtime}</span>
              </div>
            </div>
          </div>
          
          {current && (
            <div className="weather-card">
              <h3>Current Weather</h3>
              <div className="weather-info">
                <div className="weather-info-item">
                  <span>Temperature:</span>
                  <span>{current.temperature}°C</span>
                </div>
                <div className="weather-info-item">
                  <span>Description:</span>
                  <span>{current.weather_descriptions[0]}</span>
                </div>
                <div className="weather-info-item">
                  <span>Humidity:</span>
                  <span>{current.humidity}%</span>
                </div>
                <div className="weather-info-item">
                  <span>Wind Speed:</span>
                  <span>{current.wind_speed} km/h</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;