import { useState } from "react";
import "./App.css";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";



function App() {



  const [auth, setAuth] = useState(true);




  








  return (
    <div className="App">
      <Routes>
        {auth ? (
          <Route path="/" element={<Navigate to="/dashboard" />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}

        <Route path="/login" element={<Login  />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
