import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Boton from './components/Boton';
import List from './components/list';
import Add from './components/Add';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item 1", price: 1 },
    { id: 2, name: "item 2", price: 2 },
    { id: 3, name: "item 3", price: 3 },
  ]);
  
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };

  const add = (item) => {
    item.id = items.length + 1; 
    setItems([...items, item]);
  };

  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />
      {count}
      <Boton name={"suma"} click={sum} />
      <Boton name={"resta"} click={resta}/>
      <Boton name={"mensaje"} click={() => alert("Hola")} />
      <Add add={add} />
      <List items={items} ondelete={del}/>
      <Footer />
    </div>
  );
}

export default App;
