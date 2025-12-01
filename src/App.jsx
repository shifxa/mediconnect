// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Specialities from "./pages/Specialities";
import Contact from "./pages/Contact";
import Layout from "./component/Layout";

function App() {
  
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          {/* global route */}
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/specialities/:slug" element={<Specialities/>} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
