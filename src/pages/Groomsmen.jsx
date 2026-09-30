import WeddingParty from '../components/WeddingParty';
import groomsmen from '../data/groomsmen';
import './WeddingPages.css';

function Groomsmen() {
  return (
    <WeddingParty
      kicker="Meet the gentlemen"
      title="The Groomsmen"
      party={groomsmen}
    />
  );
}

export default Groomsmen;
