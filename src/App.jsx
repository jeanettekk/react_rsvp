import React from 'react';
import AppNavbar from './components/AppNavbar';
import HomeBanner from './components/HomeBanner';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  return (
    <>
      <AppNavbar />
      <HomeBanner />
      <WelcomeMessage />
    </>
  );
};

export default App