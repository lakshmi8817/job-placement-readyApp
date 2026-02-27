// Mock data for testing the weather app without API calls
export const mockCurrentWeather = {
  location: {
    name: "London",
    country: "United Kingdom",
    region: "England",
    lat: 51.5072,
    lon: -0.1276,
    timezone_id: "Europe/London",
    localtime: "2023-06-15 10:30",
    localtime_epoch: 1686821400
  },
  current: {
    observation_time: "10:30 AM",
    temperature: 18,
    weather_code: 113,
    weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"],
    weather_descriptions: ["Sunny"],
    wind_speed: 12,
    wind_degree: 230,
    wind_dir: "SW",
    pressure: 1015,
    precip: 0,
    humidity: 65,
    cloudcover: 0,
    feelslike: 19,
    uv_index: 6,
    visibility: 10,
    is_day: "yes"
  }
};

export const mockForecastWeather = {
  location: {
    name: "London",
    country: "United Kingdom",
    region: "England",
    lat: 51.5072,
    lon: -0.1276,
    timezone_id: "Europe/London",
    localtime: "2023-06-15 10:30",
    localtime_epoch: 1686821400
  },
  forecast: {
    forecastday: [
      {
        date: "2023-06-15",
        date_epoch: 1686787200,
        day: {
          maxtemp_c: 22,
          mintemp_c: 15,
          avgtemp_c: 18,
          maxwind_kph: 15,
          totalprecip_mm: 0,
          avgvis_km: 10,
          avghumidity: 65,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Sunny",
            icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
            code: 1000
          }
        },
        hour: [
          { time: "2023-06-15 0:00", temp_c: 15, condition: { text: "Clear", icon: "//cdn.weatherapi.com/weather/64x64/night/113.png" } },
          { time: "2023-06-15 12:00", temp_c: 22, condition: { text: "Sunny", icon: "//cdn.weatherapi.com/weather/64x64/day/113.png" } }
        ]
      },
      {
        date: "2023-06-16",
        date_epoch: 1686873600,
        day: {
          maxtemp_c: 24,
          mintemp_c: 16,
          avgtemp_c: 20,
          maxwind_kph: 18,
          totalprecip_mm: 0,
          avgvis_km: 10,
          avghumidity: 60,
          daily_will_it_rain: 0,
          daily_chance_of_rain: 0,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Partly cloudy",
            icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
            code: 1003
          }
        },
        hour: [
          { time: "2023-06-16 0:00", temp_c: 16, condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/night/116.png" } },
          { time: "2023-06-16 12:00", temp_c: 24, condition: { text: "Partly cloudy", icon: "//cdn.weatherapi.com/weather/64x64/day/116.png" } }
        ]
      }
    ]
  }
};

export const mockHistoricalWeather = {
  location: {
    name: "London",
    country: "United Kingdom",
    region: "England",
    lat: 51.5072,
    lon: -0.1276,
    timezone_id: "Europe/London",
    localtime: "2023-06-15 10:30",
    localtime_epoch: 1686821400
  },
  historical: {
    "2023-01-01": {
      date: "2023-01-01",
      date_epoch: 1672531200,
      hourly: [
        { time: "0:00", tempC: 7, tempF: 45, weatherCode: 119, weatherIconUrl: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"], weatherDesc: [{ value: "Cloudy" }], windspeedMiles: 8, windspeedKmph: 13, winddirDegree: 230, winddir16Point: "SW", precipMM: 0, humidity: 78, visibility: 10, pressure: 1020, cloudcover: 75, HeatIndexC: 7, HeatIndexF: 45, DewPointC: 3, DewPointF: 37, WindChillC: 5, WindChillF: 41, WindGustMiles: 12, WindGustKmph: 19, FeelsLikeC: 5, FeelsLikeF: 41, uvIndex: 1 },
        { time: "12:00", tempC: 9, tempF: 48, weatherCode: 116, weatherIconUrl: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"], weatherDesc: [{ value: "Partly cloudy" }], windspeedMiles: 10, windspeedKmph: 16, winddirDegree: 250, winddir16Point: "W", precipMM: 0, humidity: 70, visibility: 10, pressure: 1018, cloudcover: 50, HeatIndexC: 9, HeatIndexF: 48, DewPointC: 4, DewPointF: 39, WindChillC: 7, WindChillF: 45, WindGustMiles: 15, WindGustKmph: 24, FeelsLikeC: 7, FeelsLikeF: 45, uvIndex: 2 }
      ]
    },
    "2023-01-02": {
      date: "2023-01-02",
      date_epoch: 1672617600,
      hourly: [
        { time: "0:00", tempC: 6, tempF: 43, weatherCode: 119, weatherIconUrl: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"], weatherDesc: [{ value: "Cloudy" }], windspeedMiles: 9, windspeedKmph: 14, winddirDegree: 240, winddir16Point: "SW", precipMM: 0, humidity: 80, visibility: 9, pressure: 1019, cloudcover: 80, HeatIndexC: 6, HeatIndexF: 43, DewPointC: 2, DewPointF: 36, WindChillC: 4, WindChillF: 39, WindGustMiles: 13, WindGustKmph: 21, FeelsLikeC: 4, FeelsLikeF: 39, uvIndex: 1 },
        { time: "12:00", tempC: 8, tempF: 46, weatherCode: 113, weatherIconUrl: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"], weatherDesc: [{ value: "Sunny" }], windspeedMiles: 7, windspeedKmph: 11, winddirDegree: 220, winddir16Point: "SW", precipMM: 0, humidity: 65, visibility: 10, pressure: 1017, cloudcover: 20, HeatIndexC: 8, HeatIndexF: 46, DewPointC: 3, DewPointF: 37, WindChillC: 6, WindChillF: 43, WindGustMiles: 10, WindGustKmph: 16, FeelsLikeC: 6, FeelsLikeF: 43, uvIndex: 3 }
      ]
    }
  }
};

export const mockMarineWeather = {
  location: {
    name: "Portsmouth",
    country: "United Kingdom",
    region: "England",
    lat: 50.7992,
    lon: -1.0931,
    timezone_id: "Europe/London",
    localtime: "2023-06-15 10:30",
    localtime_epoch: 1686821400
  },
  marine: {
    weather: [
      {
        date: "2023-06-15",
        date_epoch: 1686787200,
        hour: [
          {
            time: "0:00",
            tempC: 14,
            tempF: 57,
            weatherCode: 113,
            weather_icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
            weather_description: "Sunny",
            windspeedMiles: 15,
            windspeedKmph: 24,
            winddirDegree: 270,
            winddir16Point: "W",
            precipMM: 0,
            humidity: 70,
            visibility: 10,
            pressure: 1015,
            cloudcover: 10,
            sigHeight_m: 0.5,
            swellHeight_m: 0.4,
            swellDir: "W",
            swellDir_deg: 270,
            swellPer_secs: 6,
            waterTemp_C: 15,
            waterTemp_F: 59,
            tide_info: []
          },
          {
            time: "12:00",
            tempC: 18,
            tempF: 64,
            weather_icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
            weather_description: "Sunny",
            windspeedMiles: 18,
            windspeedKmph: 29,
            winddirDegree: 250,
            winddir16Point: "W",
            precipMM: 0,
            humidity: 65,
            visibility: 10,
            pressure: 1012,
            cloudcover: 5,
            sigHeight_m: 0.6,
            swellHeight_m: 0.5,
            swellDir: "W",
            swellDir_deg: 270,
            swellPer_secs: 7,
            waterTemp_C: 16,
            waterTemp_F: 61,
            tide_info: []
          }
        ]
      },
      {
        date: "2023-06-16",
        date_epoch: 1686873600,
        hour: [
          {
            time: "0:00",
            tempC: 15,
            tempF: 59,
            weather_icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
            weather_description: "Partly cloudy",
            windspeedMiles: 12,
            windspeedKmph: 19,
            winddirDegree: 240,
            winddir16Point: "SW",
            precipMM: 0,
            humidity: 72,
            visibility: 10,
            pressure: 1014,
            cloudcover: 30,
            sigHeight_m: 0.4,
            swellHeight_m: 0.3,
            swellDir: "SW",
            swellDir_deg: 240,
            swellPer_secs: 5,
            waterTemp_C: 15,
            waterTemp_F: 59,
            tide_info: []
          },
          {
            time: "12:00",
            tempC: 19,
            tempF: 66,
            weather_icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
            weather_description: "Sunny",
            windspeedMiles: 16,
            windspeedKmph: 26,
            winddirDegree: 260,
            winddir16Point: "W",
            precipMM: 0,
            humidity: 60,
            visibility: 10,
            pressure: 1010,
            cloudcover: 10,
            sigHeight_m: 0.5,
            swellHeight_m: 0.4,
            swellDir: "W",
            swellDir_deg: 270,
            swellPer_secs: 6,
            waterTemp_C: 16,
            waterTemp_F: 61,
            tide_info: []
          }
        ]
      }
    ]
  }
};