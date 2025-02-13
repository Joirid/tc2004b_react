import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nombre = "Hugo Reyes";
  const elemento = <h1>Hello, {nombre}</h1>;
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{elemento}</p>
        <p>{count}</p>
        <button onClick={sum}>Add</button>
        <p>
          <strong>hola</strong>
          {2*5}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
