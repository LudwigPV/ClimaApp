import { useContext} from 'react'
import { WeatherContext } from '../../context/WeatherContext';
import { DaysWeather } from '../DaysWeather/DaysWeather';
import { HoursWeather } from '../HoursWeather/HoursWeather';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import style from './CurrentWeather.module.css';

export const CurrentWeather = () => {
  const { 
      weather,
      loading,
      location,
      setLocation,
  } = useContext(WeatherContext);

  const getCoordinatesNav = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => 
        console.log(position), 
        (error) => console.log(error), 
        {enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000} // Esperar solo 5 segundos
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }
  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <main>
        <section>
          <h2>{weather.location}</h2>
          <button className={style.geoLocationBtn} onClick={getCoordinatesNav}>Usar mi ubicación</button>
          <WeatherToday />
          <HoursWeather />
          <DaysWeather />
        </section>
      </main>
    )
  }
}
