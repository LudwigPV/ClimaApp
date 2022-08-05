import './App.css';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';
import { Header } from './components/Header/Header';
import { WeatherProvider } from './context/WeatherContext';
import { DictionaryProvider } from './context/DictionaryContext';
import { Mapa } from './components/Mapa/Mapa';

function App() {

  return (
    <DictionaryProvider> 
      <WeatherProvider>
        <div className="App">
          <Header />
          <CurrentWeather />
          <Mapa />
        </div>
      </WeatherProvider>  
    </DictionaryProvider>
  );
}

export default App;
