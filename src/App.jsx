// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Layout from "./components/Layout";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
