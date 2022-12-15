import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userLogin" element={<UserLogin />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
