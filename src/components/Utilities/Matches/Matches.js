import React from 'react';
import { Link } from 'react-router-dom';
import matchBgImg from '../../../assets/img/bg/match-bg.png';
import team1 from '../../../assets/img/matches/team1.png';
import team2 from '../../../assets/img/matches/team2.png';
import team3 from '../../../assets/img/matches/team3.png';
import team4 from '../../../assets/img/matches/team4.png';
import team5 from '../../../assets/img/matches/team5.png';
import team6 from '../../../assets/img/matches/team6.png';

import SectionTitle from '../SectionTitle/SectionTitle';

const Matches = () => {
    
    // REPLACE with your real fixtures. Time and date show "TBA" until confirmed.
    const matches = [
        {
            logoTeamOne: team1,
            teamTag1: 'Esports',
            teamName1: 'Eoorox',
            time: 'TBA',
            date: 'Date to be announced',
            logoTeamTwo: team2,
            teamTag2: 'Opponent',
            teamName2: 'Team Samurai',
        },
        {
            logoTeamOne: team3,
            teamTag1: 'Esports',
            teamName1: 'Eoorox',
            time: 'TBA',
            date: 'Date to be announced',
            logoTeamTwo: team4,
            teamTag2: 'Opponent',
            teamName2: 'Team Ninja',
        },
        {
            logoTeamOne: team5,
            teamTag1: 'Esports',
            teamName1: 'Eoorox',
            time: 'TBA',
            date: 'Date to be announced',
            logoTeamTwo: team6,
            teamTag2: 'Opponent',
            teamName2: 'Team Shinobi',
        },
    ]

    return (
        <section id="match" className="match-area pt-120 pb-90" style={{ background: `url(${matchBgImg})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SectionTitle titlefirst='Upcoming' titleSec='Matches' />
                    </div>
                </div>
                {
                    matches.map((match, index) => {
                        const {
                            logoTeamOne,
                            teamTag1,
                            teamName1,
                            logoTeamTwo,
                            time,
                            date,
                            teamTag2,
                            teamName2,
                        } = match;
                        return (
                            <div key={index} className="row align-items-center mb-30 wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="col-lg-5">
                                    <div className="team">
                                        <img src={logoTeamOne} alt={teamName1} />
                                        <div className="text">
                                            <h3>{teamName1}</h3>
                                            <span>{teamTag1}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <div className="match-time text-center">
                                        <h4>{time}</h4>
                                        <span>{date}</span>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="team2">
                                        <img src={logoTeamTwo} alt={teamName2} />
                                        <div className="text">
                                            <h3>{teamName2}</h3>
                                            <span>{teamTag2}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                <div className="row">
                    <div className="col-lg-12 text-center slider-btn mt-20">
                        <Link to={'/match-details'} className="btn ss-btn">{'Match Details'}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Matches;