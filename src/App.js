import './App.css';
import React from 'react'
import HomePage from "./components/HomePage";
import Login from "./components/Login-page"
import {Route, Routes} from "react-router-dom"
import Signup from './components/Signup-page';
// import TandC from './components/t&c'

function App() {

  return (
  <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path="/t&c" element={<TandC/>}/> */}
      </Routes>
  </>
  );
}

export default App;