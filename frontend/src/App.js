import './App.css';
import React from 'react';
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>


        <Route path="/">
           <Layout />

        </Route>
      </Routes>
      

    </div>
  )
}

export default App;
