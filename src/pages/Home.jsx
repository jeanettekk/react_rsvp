import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import couple from '../assets/images/couple.jpg';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, height: '100vh', width: '100vw', overflowY: 'auto', backgroundColor: '#F2E5D7' }}>
      <Grid container spacing={2} sx={{ height: '100vh' }}>
        {/* Left Section */}
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            order: { xs: 2, md: 1 },
            display: { xs: 'none', sm: 'flex' }, // Hide on small screens
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: 'center', padding: '50px 10px 50px 10px' }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#F4504C' }}>
              We're getting married!
            </h1>
            <h3 style={{ padding: '30px' }}>February 26, 2026, Thursday</h3>

            <h5>St Marks Church</h5>
            <h5>82 Lincoln Rd, Peterborough</h5>
            <h5>PE1 2SN</h5>

            <Box sx={{ marginTop: '30%' }}>
              <CountdownTimer />
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            order: { xs: 1, md: 2 },
            height: '100vh',
            position: 'relative', // For positioning overlay text on top of image
          }}
        >
          <Box sx={{ height: '100%', width: '100%' }}>
            <img
              src={couple}
              alt="Couple"
              style={{
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
                objectPosition: '50% 5%',
                display: 'block',
              }}
            />

            {/* Overlay Text for Small Screens */}
            {isSmallScreen && (
              <Box
                sx={{
                  position: 'absolute',
                  width: '80%',
                  top: '80%',
                  left: '51%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  backgroundColor: '#F2E5D7',
                  padding: '30px 15px 30px 15px',
                  borderRadius: '25px',
                  border: '3px solid #F4504C'
                }}
              >
                <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#F4504C' }}>
                  We're getting married!
                </h1>
                <h3 style={{ padding: '20px' }}>February 26, 2026, Thursday</h3>

                <h5>St Marks Church</h5>
                <h5>82 Lincoln Rd, Peterborough</h5>
                <h5>PE1 2SN</h5>
                
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;