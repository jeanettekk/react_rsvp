import ResponsiveImage from './ResponsiveImage';
import rhysBaby from '../assets/images/prologue/rhys-baby.jpg?w=774&format=webp&quality=78';
import rhysBabySrcSet from '../assets/images/prologue/rhys-baby.jpg?w=320;520;774&format=webp&quality=78&as=srcset';
import tennyBaby from '../assets/images/prologue/tenny-baby.jpg?w=921&format=webp&quality=78';
import tennyBabySrcSet from '../assets/images/prologue/tenny-baby.jpg?w=320;520;921&format=webp&quality=78&as=srcset';
import '../styles/Prologue.css';

const portraits = [
  {
    variant: 'groom',
    src: rhysBaby,
    srcSet: rhysBabySrcSet,
    width: 774,
    height: 927,
    name: 'Baby Rhys',
    quote: `“Rhys was very alert, and also a greedy little boy. At nursery he would steal sausages and meat off the other children's plates. The nursery staff would have to give him extra. He was also very aware of his surroundings! He would learn the bus numbers and the routes. A very clever little boy ♥️”`,
    attribution: '— Mama Marie',
  },
  {
    variant: 'bride',
    src: tennyBaby,
    srcSet: tennyBabySrcSet,
    width: 921,
    height: 719,
    name: 'Baby Teniola',
    quote: '“Tenny was one of the quietest babies at first but the momemt she started talking that was it...... she became the most outgoing and bubbly child ever.”',
    attribution: '— Mama Dayo',
  },
];

function Prologue() {
  return (
    <section id="prologue" className="scroll-section prologue-section" aria-labelledby="prologue-heading">
      <header className="page-intro">
        <span className="page-kicker">The prologue</span>
        <h1 id="prologue-heading">Before We Met</h1>
      </header>
      <div className="prologue-portraits">
        {portraits.map((portrait) => (
          <figure className={`prologue-card prologue-card-${portrait.variant}`} key={portrait.name}>
            <div className="prologue-photo-wrap">
              <ResponsiveImage
                src={portrait.src}
                srcSet={portrait.srcSet}
                sizes="(max-width: 700px) 100vw, 42vw"
                width={portrait.width}
                height={portrait.height}
                alt={portrait.name}
                className="prologue-photo"
              />
              <span className="prologue-photo-label">{portrait.name}</span>
            </div>
            <figcaption className="prologue-handwritten-quote">
              <p className="handwritten-text">{portrait.quote}</p>
              <span className="handwritten-attribution">{portrait.attribution}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Prologue;
