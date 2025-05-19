import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}/>  
        <Route path="/login" element={<Login />}/>  

      </Routes>
    </BrowserRouter>
  )
}

export default App;
