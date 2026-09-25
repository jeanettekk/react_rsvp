import { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const CountdownTimer = () => {
  const weddingDate = new Date('2027-02-27T13:00:00Z').getTime();

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

  const units = [
    { value: timeRemaining.days, label: 'Days' },
    { value: timeRemaining.hours, label: 'Hours' },
    { value: timeRemaining.minutes, label: 'Minutes' },
    { value: timeRemaining.seconds, label: 'Seconds' },
  ];

  return (
    <Box sx={{ textAlign: 'center', padding: { xs: 2, sm: 4 } }}>
      <Grid container spacing={1} justifyContent="center">
        {units.map(({ value, label }) => (
          <Grid item key={label} sx={{ flex: { xs: '1 1 0', sm: '0 1 auto' }, minWidth: 0 }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: { xs: 1, sm: 1.7 },
              borderRadius: '8px',
              boxShadow: 3
            }}>
              <Typography sx={{ fontWeight: 'bold', color: '#F4504C', fontSize: { xs: '1.4rem', sm: '2.125rem' } }}>{value}</Typography>
              <Typography sx={{ fontFamily: '"Urbanist", sans-serif', fontSize: { xs: '0.75rem', sm: '1rem' } }}>{label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountdownTimer;
