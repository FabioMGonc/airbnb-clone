import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

function App() {
  const [ user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Header user = {user} />

      <Routes>
        <Route path="/" element={<Main />}/>  
        <Route path="/login" element={<Login setUser = {setUser} />}/>
        <Route path="/register" element = {<Register setUser = {setUser} />}/>  

      </Routes>
    </BrowserRouter>
  )
}

export default App;
