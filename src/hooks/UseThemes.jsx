import { useState , useEffect } from 'react'

export const UseThemes = (weatherCondition, currentTime, location) => {
    const [theme, setTheme] = useState('Morning');

    // Cambia los estilos de acuerdo a la hora del dia y el clima
    useEffect(() => {
        switch (true) {
        case (weatherCondition >= 200 && weatherCondition <= 232) :
            setTheme('Thunderstorm')
        break;
        case (weatherCondition >= 300 && weatherCondition <= 321) :
            setTheme('Drizzle')
        break;
        case (weatherCondition >= 500 && weatherCondition <= 531) :
            setTheme('Rain')
        break;
        case (weatherCondition >= 600 && weatherCondition <= 622) :
            setTheme('Snow')
        break;
        case (weatherCondition >= 701 && weatherCondition <= 781) :
            setTheme('Atmosphere')
        break;
        case (weatherCondition === 800) :
            if (currentTime >= 6 && currentTime <= 11) {
                setTheme('Morning')
            } else if (currentTime >= 12 && currentTime <= 15) {
                setTheme('Clear')
            } else if (currentTime >= 16 && currentTime <= 20) {
                setTheme('Evening')
            } else if (currentTime >= 21 && currentTime <= 23) {
                setTheme('Night')
            } else {
                setTheme('Night')
            }
        break;
        case (weatherCondition >= 801 && weatherCondition <= 802) :
            setTheme('Clouds')
        break;
        case (weatherCondition >= 803 && weatherCondition <= 804) :
            setTheme('VeryCloud')
        break;
        default :
            setTheme('Clear')
        break;
        }
    }, [currentTime, location, weatherCondition]);
            
    // Retorna el estilo y el tema
    const themeStyles = {
        Thunderstorm: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/08/01/22/38/flash-2568381_960_720.jpg)',
        },
        Drizzle: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/21/14/35/surface-455120_960_720.jpg)',
        },
        Rain: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/03/11/12/14/raindrops-3216607_960_720.jpg)',
        },
        Snow: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg)',
            color: '#000'
        },
        Atmosphere: {
            backgroundColor: 'url(https://cdn.pixabay.com/photo/2015/07/06/13/58/mountains-833326_960_720.jpg)',
            color: '#fff'
        },
        Clear: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/10/03/16/53/refreshing-471950_960_720.jpg)',
        },
        Clouds: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/06/07/16/12/sky-1441936_960_720.jpg)',
            color: '#000'
        },
        VeryCloud: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/05/30/15/39/thunderstorm-3441687_960_720.jpg)',
        },
        Night: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_960_720.jpg)',
        },
        Morning: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/10/12/21/09/grass-3743023_960_720.jpg)',
        },
        Evening: {
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_960_720.jpg)',
        }
    }

  return ({
    themeStyles, theme
  })
}

