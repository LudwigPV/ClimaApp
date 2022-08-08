import React from 'react'
const DictionaryContext = React.createContext({});

const DictionaryProvider = ({ children }) => {
  const [dictionary, setDictionary] = React.useState({});
  const lenguageOBJ = {
    English: 'en',
    Spanish: 'es',
  }

  const unitsOBJ = {
    Metric: 'metric',
    Imperial: 'imperial',
    Standart: 'standart'
  }

  const metricChart = {
    wind_speed: {
      Metric: 'm/s',
      Imperial: 'm/h',
      Standart: 'm/s'
    },
    temperature: {
      Metric: 'C',
      Imperial: 'F',
      Standart: 'K',
    }
  }

  const weekDays = {
    es: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  }
  const months = {
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  }
  
  const weatherStatsLang = {
      real_feel: {
        es: 'Sensacion real',
        en: 'Real feel'
      },
      humidity: {
        es: 'Humedad',
        en: 'Humidity'
      },
      pop_rain: {
        es: 'Probabilidad de lluvia',
        en: 'Rain probability'
      },
      pressure: {
        es: 'Presion',
        en: 'Pressure'
      },
      uv_index: {
        es: 'Indice UV',
        en: 'UV index'
      },
      wind_speed: {
        es: 'Velocidad del viento',
        en: 'Wind Speed'
      },
  }

  const otherWords = {
    locationBtn: {
      es: 'Usar mi ubicación',
      en: 'Use my location'
    },
    footer_message: {
      es: 'Datos obtenidos de',
      en: 'Data obtained from',
    },
    marker_map_draggeable: {
      es: 'Marcador en el mapa arrastrable, click para desabilitar',
      en: 'Marker is draggable, click to disable',
    },
    marker_map_draggeable_disabled: {
      es: 'Clic para habilitar el marcador arrastrable', 
      en: 'Click here to make marker draggable',
    },
  }
  return (
    <DictionaryContext.Provider value={{ 
      dictionary, 
      setDictionary,
      lenguageOBJ,
      unitsOBJ,
      weekDays,
      months,
      weatherStatsLang,
      otherWords,
      metricChart
    }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export { DictionaryProvider, DictionaryContext };