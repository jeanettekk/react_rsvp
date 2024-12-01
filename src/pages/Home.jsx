import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import couple from '../assets/images/couple.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', width: '100vw', overflowY: 'auto'}}>
      <Grid container spacing={2}>

        <Grid item sm={12} md={6} 
          sx={{ 
            order: { xs: 2, sm: 2, md: 1}, 
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' 
          }}
        >
          <Item style={{ width: '100%' }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#333' }}>
              We're getting married!
            </h1>
          </Item>

        </Grid>

        <Grid item sm={12} md={6} sx={{ order: { xs: 1, sm: 1, md: 2 }, height: '100vh' }}>

          <Item style={{ height: '100vh', width: '100%'}}>
            <img 
              src={couple} 
              alt="Couple" 
              style={{ width: '100%', height: '100%', maxHeight: '100vh', objectFit: 'cover', objectPosition: '50% 5%', display: 'block' }} 
            />
          </Item>

        </Grid>

      </Grid>
    </Box>
  );
};

export default Home;