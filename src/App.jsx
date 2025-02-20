import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import List from './pages/list';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item 1", price: 1 },
    { id: 2, name: "item 2", price: 2 },
    { id: 3, name: "item 3", price: 3 },
  ]);
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

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

  const login = (user)=>{
    if (user.username === "joirid" && user.password === "123") {
      setIsLogin(true);
    }
    return isLogin;
  };

  const logout = () => {
    setIsLogin(false);
  }
  return (
    <div>
      <BrowserRouter> 
        {isLogin && <ResponsiveAppBar logout={logout}/>}
        <Routes>
          <Route path="/" element={<Login login={login}/>} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<List items={items} ondelete={del} />} />
          <Route path="/home" element={<Homepage/>} />
        </Routes>
      </BrowserRouter>
      
      {/* {count}
      <Boton name={"suma"} click={sum} />
      <Boton name={"resta"} click={resta}/>
      <Boton name={"mensaje"} click={() => alert("Hola")} />
      <Add add={add} />
      <List items={items} ondelete={del}/> */}

    </div>
  );
}

export default App;
