import WeddingParty from '../components/WeddingParty';
import bridesmaids from '../data/bridesmaids';
import './WeddingPages.css';

function Bridesmaids() {
  return (
    <WeddingParty
      className="bridesmaids-page"
      kicker="Meet the ladies"
      title="The Bridesmaids"
      party={bridesmaids}
    />
  );
}

export default Bridesmaids;
