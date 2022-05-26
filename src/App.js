import React, { useState } from 'react';
import './App.css';

import ComponenteA from './components/ComponenteA';

export const CuentaContext = React.createContext(0);

function App() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <CuentaContext.Provider value={{ cuenta, setCuenta }}>
      <div className="App">
        <header className="App-header">
          <ComponenteA />
        </header>
      </div>
    </CuentaContext.Provider>
  );
}

export default App;
