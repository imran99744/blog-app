import "./App.css";
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import Settings from "./Components/pages/settings/Settings";
import Singel from "./Components/pages/singel/Singel";
import Write from "./Components/pages/write/Write";
import Topbar from "./topbar/Topbar";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="post/:id" element={<Singel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
