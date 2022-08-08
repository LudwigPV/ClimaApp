import { WeatherProvider } from '../context/WeatherContext';
import { DictionaryProvider } from '../context/DictionaryContext';
import { AppUI } from './AppUI';

function App() {

  return (
    <DictionaryProvider> 
      <WeatherProvider>
        <AppUI /> 
      </WeatherProvider>  
    </DictionaryProvider>
  );
}

export default App;
