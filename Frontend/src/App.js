import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Login from "./components/Login";
import Register from './components/Register';
import Dashboard from './components/Dashboard';
const App = () => {
  return (
    <div>
       <BrowserRouter>
    
    <Routes>
      
    <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      
    </Routes>
    
  
  </BrowserRouter>

    </div>
  )
}

export default App
