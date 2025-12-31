import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ABCompany from "./pages/ABCompany";
import ABSchool from "./pages/ABSchool";
import ClassTuition from "./pages/ClassTuition";
import Outreach from "./pages/Outreach";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/theme.css";
import "./styles/fonts.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ab-company" element={<ABCompany />} />
        <Route path="/ab-school" element={<ABSchool />} />
        <Route path="/class-tuition" element={<ClassTuition />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
