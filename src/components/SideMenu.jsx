import * as React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Face2 as Face2Icon, Face6 as Face6Icon, Favorite as FavoriteIcon, EventNote as EventNoteIcon, LocationOn as LocationOnIcon, Mail as MailIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Our Story', path: '/ourstory' },
    { text: 'Schedule', path: '/schedule' },
    { text: 'Groomsmen', path: '/groomsmen' },
    { text: 'Bridesmaids', path: '/bridesmaids' },
    { text: 'Location', path: '/location' },
    { text: 'RSVP', path: '/RSVP' },
  ];

  const icons = [<HomeIcon />, <FavoriteIcon />, <EventNoteIcon />, <Face6Icon />, <Face2Icon />, <LocationOnIcon />, <MailIcon />];

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
                {icons[index] || null}
              </ListItemIcon>
              <ListItemText primary={item.text} />
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
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}