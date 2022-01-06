import React from "react";
import './App.scss';
import { Header, Footer, Homepage, About, Contact, Projects } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
