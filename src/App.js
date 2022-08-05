import './App.css';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';
import { Header } from './components/Header/Header';
import { WeatherProvider } from './context/WeatherContext';
import { DictionaryProvider } from './context/DictionaryContext';
import { Mapa } from './components/Mapa/Mapa';

function App() {

  return (
    <WeatherProvider>
      <DictionaryProvider>
        <div className="App">
          <Header />
          <CurrentWeather />
          <Mapa />
          <p>Datos consultados de <span >https://api.openweathermap.org</span> </p>
        </div>
      </DictionaryProvider>
    </WeatherProvider>
  );
}

export default App;
