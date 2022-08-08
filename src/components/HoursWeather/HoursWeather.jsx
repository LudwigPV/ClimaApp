import { WeatherContext } from "../../context/WeatherContext"
import { DictionaryContext } from "../../context/DictionaryContext"
import { useContext } from "react"
import style from "./HoursWeather.module.css"

export const HoursWeather = () => {
    const { metricChart } = useContext(DictionaryContext)
    const { weather, units } = useContext(WeatherContext);

    const hours = weather.hours;
    const hourList = hours.map(hour => new Date(hour.dt*1000).getHours())

    const cardHour = [];
      for (let i = 0; i < 24; i++) {
        cardHour.push(
        <li className={style.hour_card} key={hours[i].dt}>
          <p>{hourList[i]+':00'}</p>
          <p className={style.temperature}>{Math.floor(hours[i].temp)}°</p>
          <span className={style.icon_hour_card} style={{backgroundImage: `url(https://openweathermap.org/img/wn/${hours[i].weather[0].icon}@2x.png)` }}></span>
          <p className={style.wind_footer}>{hours[i].wind_speed} {metricChart.wind_speed[units]}</p>
        </li>
        )
      }

  return (
    <div>
      <ul className={style.hour_weather}>
        {cardHour}
      </ul>
    </div>
  )
}
