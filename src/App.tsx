import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
