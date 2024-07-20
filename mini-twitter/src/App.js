import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import SignupPage from "./components/SignupPage";
import { SignUpForm } from "./components/SignUpForm";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<SignupPage />} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
