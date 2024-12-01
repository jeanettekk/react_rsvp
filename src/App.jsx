import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import { Home, AboutUs, Schedule, Groomsmen, Bridesmaids, Location, Rsvp } from './pages'; // Import components

const App = () => {
  return (
    <>
      <AppNavbar />
      <div>
        <Routes>
           
          <Route path="/" element={<Home />} />
          <Route path="/ourstory" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/groomsmen" element={<Groomsmen />} />
          <Route path="/bridesmaids" element={<Bridesmaids />} />
          <Route path="/location" element={<Location />} />
          <Route path="/rsvp" element={<Rsvp />} />

        </Routes>
      </div>
    </>
  );
};

export default App;
