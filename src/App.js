import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <SpaceBackground />
        <div className="relative z-10">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
