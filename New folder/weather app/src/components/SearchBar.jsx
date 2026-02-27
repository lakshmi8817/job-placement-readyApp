import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'e443ef240682787901c4d15e68431ec9';
const BASE_URL = 'http://api.weatherstack.com';

const SearchBar = ({ setWeatherData, setLoading, setError }) => {
  const [location, setLocation] = useState('');
  const [activeTab, setActiveTab] = useState('current');
  const [filters, setFilters] = useState({
    degree_unit: 'c',
    forecast_days: 5,
    historical_date_start: '2023-01-01',
    historical_date_end: '2023-01-07',
    marine_days: 5
  });

  const fetchWeatherData = async () => {
    if (!location.trim()) return;

    setLoading(true);
    setError(null);

    try {
      let endpoint = '';
      let params = new URLSearchParams({
        access_key: API_KEY,
        query: location,
        units: filters.degree_unit
      });

      switch(activeTab) {
        case 'current':
          endpoint = '/current';
          break;
        case 'forecast':
          endpoint = '/forecast';
          params.append('forecast_days', filters.forecast_days);
          break;
        case 'historical':
          endpoint = '/historical';
          params.append('historical_date_start', filters.historical_date_start);
          params.append('historical_date_end', filters.historical_date_end);
          break;
        case 'marine':
          endpoint = '/marine';
          params.append('marine_days', filters.marine_days);
          break;
        case 'location':
          endpoint = '/current'; // Location search is part of current endpoint
          break;
        default:
          endpoint = '/current';
      }

      const response = await axios.get(`${BASE_URL}${endpoint}?${params}`);
      
      // Handle location search differently
      if (activeTab === 'location') {
        // For location search, we'll still use current endpoint but show location details
        setWeatherData({ ...response.data, locationQuery: location });
      } else {
        setWeatherData(response.data);
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError(err.response?.data?.error?.info || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  return (
    <div className="search-container">
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'current' ? 'active' : ''}`} 
          onClick={() => setActiveTab('current')}
        >
          Current
        </button>
        <button 
          className={`tab ${activeTab === 'forecast' ? 'active' : ''}`} 
          onClick={() => setActiveTab('forecast')}
        >
          Forecast
        </button>
        <button 
          className={`tab ${activeTab === 'historical' ? 'active' : ''}`} 
          onClick={() => setActiveTab('historical')}
        >
          Historical
        </button>
        <button 
          className={`tab ${activeTab === 'marine' ? 'active' : ''}`} 
          onClick={() => setActiveTab('marine')}
        >
          Marine
        </button>
        <button 
          className={`tab ${activeTab === 'location' ? 'active' : ''}`} 
          onClick={() => setActiveTab('location')}
        >
          Location
        </button>
      </div>
      
      {/* Advanced Filters */}
      <div className="filter-options">
        <div className="filter-group">
          <label>Unit: </label>
          <select 
            value={filters.degree_unit} 
            onChange={(e) => handleFilterChange('degree_unit', e.target.value)}
            className="filter-select"
          >
            <option value="c">Celsius</option>
            <option value="f">Fahrenheit</option>
          </select>
        </div>
        
        {activeTab === 'forecast' && (
          <div className="filter-group">
            <label>Days: </label>
            <select 
              value={filters.forecast_days} 
              onChange={(e) => handleFilterChange('forecast_days', parseInt(e.target.value))}
              className="filter-select"
            >
              <option value={1}>1 Day</option>
              <option value={3}>3 Days</option>
              <option value={5}>5 Days</option>
              <option value={7}>7 Days</option>
            </select>
          </div>
        )}
        
        {activeTab === 'historical' && (
          <>
            <div className="filter-group">
              <label>Start Date: </label>
              <input
                type="date"
                value={filters.historical_date_start}
                onChange={(e) => handleFilterChange('historical_date_start', e.target.value)}
                className="filter-input"
              />
            </div>
            <div className="filter-group">
              <label>End Date: </label>
              <input
                type="date"
                value={filters.historical_date_end}
                onChange={(e) => handleFilterChange('historical_date_end', e.target.value)}
                className="filter-input"
              />
            </div>
          </>
        )}
        
        {activeTab === 'marine' && (
          <div className="filter-group">
            <label>Days: </label>
            <select 
              value={filters.marine_days} 
              onChange={(e) => handleFilterChange('marine_days', parseInt(e.target.value))}
              className="filter-select"
            >
              <option value={1}>1 Day</option>
              <option value={3}>3 Days</option>
              <option value={5}>5 Days</option>
              <option value={7}>7 Days</option>
            </select>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder={`Enter city name for ${activeTab} weather...`}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;