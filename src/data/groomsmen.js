// Replace these with your actual image files in src/assets/images/groomsmen/
import jkImg from '../assets/images/groomsmen/jk.jpg?format=webp&quality=80';
import jkThumb from '../assets/images/groomsmen/jk.jpg?w=600&format=webp&quality=76';
import jkImg2 from '../assets/images/groomsmen/jk-2.jpg?format=webp&quality=80';
import jkImg3 from '../assets/images/groomsmen/jk-3.jpg?format=webp&quality=80';
import nyleImg from '../assets/images/groomsmen/nyle.jpg?format=webp&quality=80';
import nyleThumb from '../assets/images/groomsmen/nyle.jpg?w=600&format=webp&quality=76';
import nyleImg2 from '../assets/images/groomsmen/nyle-2.jpg?format=webp&quality=80';
import aflayImg from '../assets/images/groomsmen/aflay.jpg?format=webp&quality=80';
import aflayThumb from '../assets/images/groomsmen/aflay.jpg?w=600&format=webp&quality=76';
import aflayImg2 from '../assets/images/groomsmen/aflay-2.jpg?format=webp&quality=80';

const groomsmen = [
  { initials: 'BM', name: 'JK', images: [jkImg, jkImg2, jkImg3], thumbnail: { src: jkThumb, width: 600, height: 1127 }, text: 'Hi I\'m  JK. Me and Rhys met many moons ago as lil bebes at our first job. He was the tall one, I was the short one, we\'re made quite the pair.' },
  { initials: 'G1', name: 'Nyle', images: [nyleImg, nyleImg2], thumbnail: { src: nyleThumb, width: 600, height: 800 }, text: 'I\'m Nyle, Rhys\'s brother.\nSome of my earliest memories of Rhys involve my mum standing over his bed with a spray bottle, trying to get him up on a weekend. He was not a morning person. When he was actually awake, chances are he was glued to Dragon Ball Z, which he was completely obsessed with.\nHe was also the first person I ever saw buying and selling on eBay, back when eBay had a bit of a dodgy reputation (at least in our parents\' eyes). Watching him do it got me curious, so I started small, flogging little bits here and there, and it slowly grew into something a lot bigger. So in a way, Rhys is the reason I got into all of that.\nCouldn\'t be prouder of him. Love you bro.' },
  { initials: 'G2', name: 'Aflay', images: [aflayImg, aflayImg2], thumbnail: { src: aflayThumb, width: 600, height: 600 }, text: 'I met Rhys through my friend Degan who was a mutual friend of both of ours and I Came to dodgeball and Met RJ although I was introduced to him with the name Booze, so I didn\'t even know his real name until a little later on.\nHe seemed like a cool guy, it\'s great that we have stayed in touch ever since. Its even an honour to be a groomsmen although I was told by his fiancè I was a groomsmen and I said to her \'are you sure because RJ has not told me anything?\'' },
];

export default groomsmen;
