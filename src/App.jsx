import './App.css';
import { useEffect, useState } from 'react';
// import Footer from './components/Footer';
import List from './pages/list';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  const [items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {if (isLogin) {getItems();}}, [isLogin ]);

  const getItems = async () => {
    const result = await fetch("http://localhost:5001/items/");
    const data = await result.json();
    setItems(data);

  };
  
  //const sum = () => {
    // setCount(count + 1);
  //};
  //const resta = () => {
    //setCount(count - 1);
  //};

  const add = async (item) => {
    //item.id = items.length + 1; 
    const result = await fetch("http://localhost:5001/items/", {method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(item), });
    const data = await result.json();
    setItems([...items, data.item]);
  };

  const del = async (id) => {
    await fetch("http://localhost:5001/items/" + id, {method:"DELETE"});
    setItems(items.filter((item) => item.id !== id));
  };

  const login = async (user) => {
    const result = await fetch("http://localhost:5001/login/", {method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(user), });
    const data = await result.json();
    setIsLogin(data.isLogin);
    // return data.isLogin;
    //if (user.username === "joirid" && user.password === "123") {
    //setIsLogin(true);
    //}
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
      

    </div>
  );
}

export default App;
