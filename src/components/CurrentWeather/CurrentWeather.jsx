import { useContext} from 'react'
import { WeatherContext } from '../../context/WeatherContext';
import { DaysWeather } from '../DaysWeather/DaysWeather';
import { HoursWeather } from '../HoursWeather/HoursWeather';
import { WeatherToday } from '../WeatherToday/WeatherToday';


export const CurrentWeather = () => {
    const { 
        weather,
        loading,
     } = useContext(WeatherContext);

  if (loading) {
    return <div>Cargando...</div>;
  } else {
    return (
      <main>
        <section>
          <h2>{weather.location}</h2>
          <WeatherToday />
          <HoursWeather />
          <DaysWeather />
        </section>
      </main>
    )
  }
}
