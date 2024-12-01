import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import couple from '../assets/images/couple.jpg';

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh', width: '100vw', overflowY: 'auto' }}>
      <Grid container spacing={2} sx={{ height: '100vh' }}>
        {/* Left Section */}
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            order: { xs: 2, md: 1 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              padding: '50px 10px 50px 10px'
            }}
          >
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#F4504C' }}>
              We're getting married!
            </h1>
            <h2 style={{padding: '20px'}}>February 26, 2026, Thursday</h2>
            <h5>
              St Marks Church
              <br />
              82 Lincoln Rd, Peterborough
              <br />
              PE1 2SN
            </h5>
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
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
