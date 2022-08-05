import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import style from './DaysWeather.module.css';

export const DaysWeather = () => {
    const { weather, weekDays} = useContext(WeatherContext);
    const week = weather.week;
    const weekDaysList = week.map((day) => new Date(day.dt*1000));
    const weekTempMax = week.map((day) => Math.floor(day.temp.max));
    const weekTempMin = week.map((day) => Math.floor(day.temp.min));
   
    return (
    <article className={style.days_weather_container}>
        <div className={style.week_weather}>
            <ul >
                {weekDaysList.map((day, index) => 
                    <li className={style.day_weather} key={day.getDate()}>
                        <p>
                            <span className={style.iconWeek} style={{backgroundImage: `url(https://openweathermap.org/img/wn/${week[index].weather[0].icon}@2x.png)`}}></span>
                            {weekDays[day.getDay()]}        
                            <span> {day.getDate()}</span>
                        </p>
                        <p><span>{weekTempMin[index]}</span>° / <span>{weekTempMax[index]}</span>°</p>	
                    </li>
                )}
            </ul>
            </div>
    </article>
  )
}
