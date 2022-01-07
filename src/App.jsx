import React, { useState } from "react";
import './App.scss';
import { Header, Footer, Homepage, About, Contact, Projects } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { projects } from "./projects";

function App() {
  const [projectsObj] = useState(projects);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage projects={projectsObj} />} />
        <Route path="/projects" exact element={<Projects projects={projectsObj} />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
