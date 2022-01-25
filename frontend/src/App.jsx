import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contactus from './pages/Contactus/Contactus';
import Aboutus from './pages/Aboutus/Aboutus';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
