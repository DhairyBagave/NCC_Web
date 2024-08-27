import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Achievements from './components/Achievements';
import AboutNCC from './components/AboutNCC';
import Camps from './components/Camps';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import './App.css';
import NCCStructure from './components/NCCStructure';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutNCC />
      <NCCStructure/>
      <PhotoGallery/>
      <Achievements />
      <Camps />
      <EnrollmentForm />
      <Footer />
    </div>
  );
}

export default App;

