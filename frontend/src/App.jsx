import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/aboutus" element={<Aboutus />} />

    </Routes>

  );
}

export default App;
