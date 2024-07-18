import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
