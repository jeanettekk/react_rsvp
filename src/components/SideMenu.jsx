import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListItem from '@mui/material/ListItem';
import Face2Icon from '@mui/icons-material/Face2';
import Face6Icon from '@mui/icons-material/Face6';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
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