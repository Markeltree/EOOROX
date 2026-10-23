import workImg1 from '../assets/img/gallery/protfolio-img01.png';
import workImg2 from '../assets/img/gallery/protfolio-img02.png';
import workImg3 from '../assets/img/gallery/protfolio-img03.png';
import workImg4 from '../assets/img/gallery/protfolio-img04.png';
import workImg5 from '../assets/img/gallery/protfolio-img05.png';
import workImg6 from '../assets/img/gallery/protfolio-img06.png';
import workImg7 from '../assets/img/gallery/protfolio-img07.png';
import workImg8 from '../assets/img/gallery/protfolio-img08.png';

// Game divisions shown on the home page and the Games page.
// `cat` must match one of the platform filters below.
export const platforms = ['PC', 'Console', 'Mobile'];

const games = [
    {
        img: workImg1,
        tag: 'PC',
        label: 'Battle Royale',
        description: 'Last squad standing',
        cat: 'PC',
    },
    {
        img: workImg2,
        tag: 'PC',
        label: 'Tactical FPS',
        description: 'Precision and teamwork',
        cat: 'PC',
    },
    {
        img: workImg3,
        tag: 'Console',
        label: 'Arena Shooter',
        description: 'Fast-paced head-to-head',
        cat: 'Console',
    },
    {
        img: workImg4,
        tag: 'Console',
        label: 'Fighting Games',
        description: 'One-on-one showdowns',
        cat: 'Console',
    },
    {
        img: workImg5,
        tag: 'PC',
        label: 'MOBA',
        description: 'Strategy and team fights',
        cat: 'PC',
    },
    {
        img: workImg6,
        tag: 'Console',
        label: 'Sports Titles',
        description: 'Football, racing and more',
        cat: 'Console',
    },
    {
        img: workImg7,
        tag: 'Mobile',
        label: 'Mobile Battle Royale',
        description: 'Competitive on the go',
        cat: 'Mobile',
    },
    {
        img: workImg8,
        tag: 'Mobile',
        label: 'Mobile MOBA',
        description: 'Quick matches, big plays',
        cat: 'Mobile',
    },
];

export default games;
