import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homepage';
import Courses from './pages/Courses';
import ProjectsPage from './pages/Projects';
import Reflections  from './pages/Reflection';
import Contact from './pages/Contact';




function App() {
  return(
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/reflections" element={<Reflections />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router> 
    
    </>
  );
  
}

export default App
