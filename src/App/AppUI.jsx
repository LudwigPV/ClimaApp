import { CurrentWeather } from '../components/CurrentWeather/CurrentWeather';
import { Header } from '../components/Header/Header';
import { Mapa } from '../components/Mapa/Mapa';
import { WeatherContext } from '../context/WeatherContext';
import { useContext, useRef } from 'react';
import { UseThemes } from '../hooks/UseThemes';
import style from './AppUI.module.css';
import { Loading } from '../components/Loading/Loading';

export const AppUI = () => {
    const { 
        loading , 
        error ,
        weather,
        location,
    } = useContext(WeatherContext);
    const themeRef = useRef(null);

    const weatherCondition = weather.id_weather;
    const currentTime = new Date(weather.date * 1000).getHours();
    const { themeStyles, theme } = UseThemes(weatherCondition, currentTime, location);
    

    if (loading) {
        return <Loading />
    } else if (error) {
        return <div>{error}</div>;
    } else {
    return (
        <div className={style.App} style={themeStyles[theme]} ref={themeRef}>
            <Header />
            <CurrentWeather />
            <Mapa />
        </div>
    )
    }
}
