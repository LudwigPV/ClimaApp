import { useContext } from "react"
import { WeatherContext } from "../../context/WeatherContext"
import { DictionaryContext } from "../../context/DictionaryContext"
import style from './WeatherToday.module.css'

export const WeatherToday = () => {
  const { months, weekDays , weatherStatsLang } = useContext(DictionaryContext);
  const { weather , lenguage } = useContext(WeatherContext);
  const today = new Date(weather.date * 1000);

  const firstCapitalLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={style.weatherTodayContainer}>
      <ul className={style.weatherTodayView}>
        <li className={style.date}>
          {/* Renderiza el día de la semana y el día del mes */}
          {weekDays[lenguage][today.getDate()]} {today.getDay()} {months[lenguage][today.getMonth()]}</li>
        <li className={style.temperature}>{Math.floor(weather.temp)+'°'}</li>
        <li className={style.temperature_caption}>{firstCapitalLetter(weather.weather_description)}</li>
      </ul>
      <ul className={style.weatherTodayCard}>
        <li>Min {Math.floor(weather.temp_Min)+'°'} / Max {Math.floor(weather.temp_Max)+'°'}</li>
        <li>{weatherStatsLang.real_feel[lenguage]}: {weather.temp_Feel+'°'}</li>
        <li>{weatherStatsLang.humidity[lenguage]}: {weather.humidity}</li>
        <li>{weatherStatsLang.pop_rain[lenguage]}: {Math.floor(weather.pop_rain*100)} %</li>
        <li>{weatherStatsLang.pressure[lenguage]}: {weather.pressure}mbar</li>
        <li>{weatherStatsLang.wind_speed[lenguage]}: {weather.wind} km/h</li>
        <li>{weatherStatsLang.uv_index[lenguage]}: {weather.uv_index}</li>
      </ul>
    </div>
  )
}
