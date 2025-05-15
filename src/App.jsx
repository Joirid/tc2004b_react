import './App.css';
import { useEffect, useState } from 'react';
// import Footer from './components/Footer';
import List from './pages/list';
import Add from './components/Add';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Appbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

const API_URL = process.env.REACT_APP_API_URL /*|| "http://localhost:5001"*/;

function App() {
  const [items, setItems] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {if (isLogin) {getItems();}}, [isLogin ]);

  const getItems = async () => {
    const result = await fetch(API_URL + "/items/", { method:"GET", headers:{"Authorization":localStorage.getItem('token') }});
    const data = await result.json();
    setItems(data);

  };

  const add = async (item) => {
    //item.id = items.length + 1; 
    const result = await fetch(API_URL + "/items/", { method:"POST", headers:{"content-type":"application/json", "Authorization":localStorage.getItem('token')}, body:JSON.stringify(item), });
    const data = await result.json();
    setItems([...items, data]);
    console.log(data);
    console.log(items);
  };

  const del = async (id) => {
    await fetch(API_URL + "/items/" + id, {method:"DELETE", headers:{"Authorization":localStorage.getItem('token')}});
    setItems(items.filter((item) => item.id !== id));
  };

  const login = async (user) => {
    const result = await fetch(API_URL + "/login2/", { method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(user), });
    const data = await result.json();
    setIsLogin(data.isLogin);
    localStorage.setItem("token", data.token);
    console.log(localStorage.getItem('token'));
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
