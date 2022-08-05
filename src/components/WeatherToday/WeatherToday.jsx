import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import style from './WeatherToday.module.css'

export const WeatherToday = () => {
    const { weather, months , weekDays } = useContext(WeatherContext);
    const today = new Date(weather.date * 1000);
    
  return (
    <div className={style.weatherTodayContainer}>
      <ul className={style.weatherTodayView}>
        <li className={style.date}>{weekDays[today.getDate()]} {today.getDay()} {months[today.getMonth()]}</li>
        <li className={style.temperature}>{Math.floor(weather.temp)+'°'}</li>
        <li className={style.temperature_caption}>{weather.weather} - {weather.weather_description}</li>
      </ul>
      <ul className={style.weatherTodayCard}>
        <li>Min {Math.floor(weather.temp_Min)+'°'} / Max {Math.floor(weather.temp_Max)+'°'}</li>
        <li>Sensación real: {weather.temp_Feel+'°'}</li>
        <li>Humedad: {weather.humidity}</li>
        <li>Probabilidad de lluvia: {Math.floor(weather.pop_rain*100)} %</li>
        <li>Presion: {weather.pressure}mbar</li>
        <li>Velocidad del Viento: {weather.wind} km/h</li>
        <li>Indice UV: {weather.uv_index}</li>
      </ul>
    </div>
  )
}
