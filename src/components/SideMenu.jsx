import * as React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Face2 as Face2Icon, Face6 as Face6Icon, Favorite as FavoriteIcon, EventNote as EventNoteIcon, LocationOn as LocationOnIcon, Mail as MailIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/#home', Icon: HomeIcon },
    { text: 'Our Story', path: '/#story', Icon: FavoriteIcon },
    { text: 'Schedule', path: '/#schedule', Icon: EventNoteIcon },
    { text: 'Groomsmen', path: '/#groomsmen', Icon: Face6Icon },
    { text: 'Bridesmaids', path: '/#bridesmaids', Icon: Face2Icon },
    { text: 'Location', path: '/#location', Icon: LocationOnIcon },
    { text: 'RSVP', path: '/rsvp', Icon: MailIcon },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 290, minHeight: '100%', backgroundColor: '#f8eee4' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ px: 3, pt: 4, pb: 3 }}>
        <Typography
          sx={{
            color: '#be0e65',
            fontFamily: '"Prata", serif',
            fontSize: '1.65rem',
          }}
        >
          Rhys & Teniola
        </Typography>
        <Typography
          sx={{
            mt: 0.75,
            color: '#987280',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          Saturday · 27 February 2027
        </Typography>
      </Box>
      <Divider sx={{ mx: 3, borderColor: 'rgba(190, 14, 101, .18)' }} />
      <List sx={{ px: 2, py: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                minHeight: 50,
                borderRadius: '12px',
                backgroundColor: item.text === 'RSVP' ? '#be0e65' : 'transparent',
                color: item.text === 'RSVP' ? '#fff' : '#321b27',
                transition: 'background-color .2s ease, transform .2s ease',
                '&:hover': {
                  backgroundColor: item.text === 'RSVP' ? '#a90c59' : 'rgba(190, 14, 101, .09)',
                  transform: 'translateX(3px)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 42, color: item.text === 'RSVP' ? '#fdb21e' : '#be0e65' }}>
                <item.Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
      <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            sx={{ color: '#FFFFFF' }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#f8eee4',
            boxShadow: '12px 0 40px rgba(50, 27, 39, .2)',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
