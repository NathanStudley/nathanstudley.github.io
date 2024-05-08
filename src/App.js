import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
    
 
  );
}

export default App;
