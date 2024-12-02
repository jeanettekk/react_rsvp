import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 3px solid #F4504C;
  border-radius: 10px;
  display: block;
`;

const Location = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        overflowY: 'auto',
        backgroundColor: '#F2E5D7',
      }}
    >
      <Grid container spacing={2} sx={{ flex: 1 }}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#F4504C' }}>Ceremony Venue</h1>
            <h2 style={{ padding: '20px' }}>St Marks Church</h2>
            <h5>
              82 Lincoln Rd, Peterborough
              <br />
              PE1 2SN
            </h5>
          </Box>
        </Grid>

        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', padding: '10px' }}>
            <MapIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.4964494240503!2d-0.24589824502346846!3d52.57871699106702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f0fe1c3e8a2d%3A0x24a7bc1517e410ba!2sSt%20Mark&#39;s%20Church%20Peterborough!5e0!3m2!1sen!2suk!4v1733180111223!5m2!1sen!2suk"
              title="Reception Location"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ flex: 1 }}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ margin: 0, fontSize: '2.5rem', color: '#F4504C' }}>Reception Venue</h1>
            <h2 style={{ padding: '20px' }}>New Theatre</h2>
            <h5>
              46 Broadway, Peterborough
              <br />
              PE1 1RT
            </h5>
          </Box>
        </Grid>

        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', padding: '10px' }}>
            <MapIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.5910762704357!2d-0.24330222288270084!3d52.57700593200693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f0fefe09dde7%3A0x1ff1b27549735dbf!2sNew%20Theatre!5e0!3m2!1sen!2suk!4v1733180237913!5m2!1sen!2suk"
              title="Reception Location"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
