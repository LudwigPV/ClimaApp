import React from "react";
const WeatherContext = React.createContext();

const WeatherProvider = ({ children }) => {
  // Busca el idioma del navegador y lo guarda en el estado lenguage
  const [lenguage, setLenguage] = React.useState(
    navigator.languages[2] === 'es' ? 'es': 'en'
  );
  const [weather, setWeather] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [location, setLocation] = React.useState({
    lat: 33.44,
    lng: -94.04,
  }); 
  
  const [units, setUnits] = React.useState("metric");

  React.useEffect(() => {
    fetch (`${process.env.REACT_APP_API}onecall?lat=${location.lat}&lon=${location.lng}&exclude=minutely&appid=${process.env.REACT_APP_APIKEY}&units=${units}&lang=${lenguage}`)
    .then((response) => {
    if (!response.ok) {
      console.log(response.status)}
    else {
      return response.json()
    }
  })
    .then(data => {
        setWeather({
            hours: data.hourly,
            week: data.daily,
            location: data.timezone,
            date: data.current.dt,
            id_img: data.current.weather[0].icon,
            temp: data.current.temp,
            temp_Feel: data.current.feels_like,
            temp_Max: data.daily[0].temp.max,
            temp_Min: data.daily[0].temp.min,
            temp_morning: data.daily[0].temp.morn,
            temp_evening: data.daily[0].temp.eve,
            temp_night: data.daily[0].temp.night,
            humidity: data.current.humidity,
            pop_rain: data.hourly[0].pop,
            pressure: data.current.pressure,
            uv_index: data.current.uvi,
            wind: data.current.wind_speed,
            wind_direction: data.current.wind_deg,
            weather: data.current.weather[0].main,
            weather_description: data.current.weather[0].description,
        });
        setLoading(false);
    })
    .catch(error => {
        setError(error);
        setLoading(false);
        console.log(error);
    });

  }, [lenguage, units, location]);

  return (
    <WeatherContext.Provider value={{ 
      weather, 
      setWeather, 
      loading, 
      setLoading,
      error,
      setError,
      units,
      setUnits,
      lenguage,
      setLenguage,
      location,
      setLocation
    }}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider, WeatherContext };