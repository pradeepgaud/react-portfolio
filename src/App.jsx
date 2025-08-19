import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav";

// Pages
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Cursor from "./Components/Cursor";
import Skills from "./Components/Skills";
import LoadingScreen from "./Components/LoadingScreen";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <LoadingScreen />
      <Cursor />
      <Nav />
      <div className="pt-16">
        {" "}
        {/* padding to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
