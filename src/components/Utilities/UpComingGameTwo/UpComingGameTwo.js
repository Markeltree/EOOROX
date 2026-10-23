import SectionTitle from "../SectionTitle/SectionTitle";

import bgImg from '../../../assets/img/bg/match-bg2.png';
import gameImg1 from '../../../assets/img/matches/team7.png';
import gameImg2 from '../../../assets/img/matches/team8.png';
import gameImg3 from '../../../assets/img/matches/team9.png';
import gameImg4 from '../../../assets/img/matches/team10.png';


// REPLACE the dates once each event is confirmed.
const gameData = [
    {
        id: '1',
        thumb: gameImg1,
        tag: 'Tryouts',
        label: 'Open Tryouts',
        date: 'Dates announced soon'
    },
    {
        id: '2',
        thumb: gameImg2,
        tag: 'Tournament',
        label: 'Eoorox Community Cup',
        date: 'Dates announced soon'
    },
    {
        id: '3',
        thumb: gameImg3,
        tag: 'Community',
        label: 'Fan Meetup',
        date: 'Dates announced soon'
    },
    {
        id: '4',
        thumb: gameImg4,
        tag: 'Stream',
        label: 'Charity Stream Marathon',
        date: 'Dates announced soon'
    },
]


const UpComingGameTwo = () => {
    return (
        <section id="services" className="services-area what-story pt-120 pb-120 fix" style={{ background: `url(${bgImg}) no-repeat` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-relative">
                        <SectionTitle titlefirst='Upcoming' titleSec='Events' />
                    </div>
                </div>
                <div className="row">
                    {
                        gameData.map(data => {
                            const { id, thumb, tag, label, date } = data;
                            return (
                                <div className="col-lg-3 col-sm-6" key={id}>
                                    <div className="services-box service2 text-center mb-30  wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                        <div className="services-icon p-relative mb-30">
                                            <img src={thumb} alt={label} />
                                            <span>{tag}</span>
                                        </div>
                                        <div className="services-content3">
                                            <h4>{label}</h4>
                                            <h6>{date}</h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}
export default UpComingGameTwo;