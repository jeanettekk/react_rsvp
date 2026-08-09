import gokuCharge from '../assets/images/goku-kamehameha-charge.webp';
import gokuFire from '../assets/images/goku-kamehameha-fire.webp';
import './KamehamehaAnimation.css';

const KamehamehaAnimation = () => (
  <div className="rsvp-kamehameha-scene" aria-hidden="true">
    <img
      src={gokuCharge}
      alt=""
      className="rsvp-goku rsvp-goku-charge"
      draggable="false"
    />
    <img
      src={gokuFire}
      alt=""
      className="rsvp-goku rsvp-goku-fire"
      draggable="false"
    />
    <span className="rsvp-kamehameha-orb" />
    <span className="rsvp-kamehameha-beam" />
  </div>
);

export default KamehamehaAnimation;
