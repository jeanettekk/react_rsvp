import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const CountdownTimer = () => {
  const weddingDate = new Date('February 26, 2026 00:00:00').getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime(); // Current time
      const distance = weddingDate - now; // Time difference

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });

      if (distance <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 1.7,
            borderRadius: '8px',
            boxShadow: 3
          }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#F4504C' }}>{timeRemaining.days}</Typography>
            <Typography variant="body1" sx={{ fontFamily: '"Urbanist", sans-serif' }}>Days</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 1.7,
            borderRadius: '8px',
            boxShadow: 3
          }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#F4504C' }}>{timeRemaining.hours}</Typography>
            <Typography variant="body1" sx={{ fontFamily: '"Urbanist", sans-serif' }}>Hours</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 1.7,
            borderRadius: '8px',
            boxShadow: 3
          }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#F4504C' }}>{timeRemaining.minutes}</Typography>
            <Typography variant="body1" sx={{ fontFamily: '"Urbanist", sans-serif' }}>Minutes</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 1.7,
            borderRadius: '8px',
            boxShadow: 3
          }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#F4504C' }}>{timeRemaining.seconds}</Typography>
            <Typography variant="body1" sx={{ fontFamily: '"Urbanist", sans-serif' }}>Seconds</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CountdownTimer;
