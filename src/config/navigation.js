import {
  ChildCare,
  EventNote,
  Face2,
  Face6,
  Favorite,
  Home,
  HelpOutline,
  LocationOn,
} from '@mui/icons-material';

const navigationItems = [
  { label: 'Home', path: '/#home', Icon: Home },
  { label: 'Before We Met', path: '/#prologue', Icon: ChildCare },
  { label: 'Our Story', path: '/#story', Icon: Favorite },
  { label: 'Schedule', path: '/#schedule', Icon: EventNote },
  { label: 'Groomsmen', path: '/#groomsmen', Icon: Face6 },
  { label: 'Bridesmaids', path: '/#bridesmaids', Icon: Face2 },
  { label: 'Location', path: '/#location', Icon: LocationOn },
  { label: 'FAQs', path: '/faq', Icon: HelpOutline },
];

export default navigationItems;
