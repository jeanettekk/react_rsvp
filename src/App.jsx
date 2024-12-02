import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import { Home, AboutUs, Schedule, Groomsmen, Bridesmaids, Location, Rsvp } from './pages';

const App = () => {
  return (
    <>
      <AppNavbar />
      <div style={{ paddingTop: '72px' }}> {/* Add padding equal to navbar height */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
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
