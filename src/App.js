import React from "react";
import './App.css';
import { Header, Footer, Homepage, About, Contact, Projects, Team } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
        <Footer />
        <div style={{height:2000}}></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
