import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import HomeBanner from './components/HomeBanner';
import WelcomeMessage from './components/WelcomeMessage';
import { Home, AboutUs, Schedule, Groomsmen, Bridesmaids, Location, Rsvp } from './pages'; // Updated import statement


const App = () => {
  return (
    <>
      <AppNavbar />  {/* Navbar visible on all routes */}

      <div>
        <Routes>
          {/* Home route with HomeBanner */}
          <Route 
            path="/" 
            element={
              <>
                <HomeBanner />  {/* HomeBanner only appears on the home page */}
                <Home />
              </>
            } 
          />
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