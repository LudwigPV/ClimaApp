import { useContext} from 'react'
import { WeatherContext } from '../../context/WeatherContext';
import { DaysWeather } from '../DaysWeather/DaysWeather';
import { HoursWeather } from '../HoursWeather/HoursWeather';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { DictionaryContext } from '../../context/DictionaryContext';
import style from './CurrentWeather.module.css';

export const CurrentWeather = () => {
  const { 
      weather,
      loading,
      setLocation,
      lenguage
  } = useContext(WeatherContext);
  const { otherWords } = useContext(DictionaryContext);

  const getCoordinatesNav = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => 
        setLocation({lat: position.coords.latitude, lng: position.coords.longitude}),
        (error) => console.log(error) && alert('Error getting location'), 
        {enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        timeout: 5000} // Esperar solo 5 segundos
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <main>
        <section>
          <h2>{weather.location}</h2>
          <button className={style.geoLocationBtn} onClick={getCoordinatesNav}>{otherWords.locationBtn[lenguage]}</button>
          <WeatherToday />
          <HoursWeather />
          <DaysWeather />
        </section>
      </main>
    )
  }
}
