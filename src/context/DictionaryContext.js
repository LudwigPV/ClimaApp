import React from 'react'
const DictionaryContext = React.createContext({});

const DictionaryProvider = ({ children }) => {
  const [dictionary, setDictionary] = React.useState({});

  
  const lenguageOBJ = {
    English: 'en',
    Spanish: 'sp',
  }

  const unitsOBJ = {
    Metric: 'metric',
    Imperial: 'imperial',
    Standart: 'standart'
  }

  return (
    <DictionaryContext.Provider value={{ 
      dictionary, 
      setDictionary,
      lenguageOBJ,
      unitsOBJ,
    }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export { DictionaryProvider, DictionaryContext };