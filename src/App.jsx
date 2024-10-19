import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AppNavbar from './components/AppNavbar';
import HomeBanner from './components/HomeBanner';
import WelcomeMessage from './components/WelcomeMessage';
import Home from './pages/Home';  // Home component
import AboutUs from './pages/AboutUs';
import Schedule from './pages/Schedule';

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

          {/* About Us route */}
          <Route path="/about" element={<AboutUs />} />

          {/* Schedule route */}
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </>
  );
};

export default App;