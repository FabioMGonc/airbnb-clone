import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Register from "./pages/Register.jsx"
import Account from "./pages/Account.jsx";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const [ user, setUser] = useState(null);

  useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get('/users/profile');
      setUser(data)
    }
    axiosGet()
  }, []);

  return (
    <BrowserRouter>
      <Header user = {user} />

      <Routes>
        <Route path="/" element={<Main />}/>  
        <Route path="/login" element={<Login user={user} setUser = {setUser} />}/>
        <Route path="/register" element = {<Register setUser = {setUser} />}/>  
        <Route path="/account/:subpage?" element = {<Account />}/>  

      </Routes>
    </BrowserRouter>
  )
}

export default App;
