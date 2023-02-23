import './App.css';
import React from 'react';
import Layout from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter>

      <Routes>


        <Route path="/" element={<Layout />}/>
           

       
      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App;
