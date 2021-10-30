import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {number} 
        </p>
        <button onClick={() => randomNumber()}>Criar novo numero</button>
      </header>
    </div>
  );
}

export default App;
