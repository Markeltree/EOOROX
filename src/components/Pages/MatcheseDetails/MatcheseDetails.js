import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";

import mathchImg from '../../../assets/img/bg/macthes-image.png';
import thumb1 from '../../../assets/img/matches/m-11.png';
import thumb2 from '../../../assets/img/matches/m-12.png';
// REPLACE with the real fixture details. Values marked "TBA" are shown as-is.
const liveTeam = {
    thumb1: thumb1,
    thumb2: thumb2,
    team1: 'Eoorox',
    team2: 'Team Samurai',
}

const detailInfo = {
    tournamentName: 'Championship Qualifier',
    date: 'Date to be announced',
    format: 'Best of 3',
    stage: 'Group Stage',
    prizePool: 'TBA',
    text: [
        'Eoorox takes on Team Samurai in a crucial qualifier match. A win here puts us one step closer to the main event.',
        'Our roster has spent the last few weeks refining strategies, reviewing opponent footage and sharpening their teamwork in scrims. Expect aggressive openings, disciplined mid-rounds and the clutch plays our fans love.',
        'Tune in live, cheer for the squad and follow our social channels for match-day updates, line-up announcements and post-match reactions.',
    ],
}
const MatcheseDetails = () => {
    const { thumb1, thumb2, team1, team2 } = liveTeam;
    const { tournamentName, date, format, stage, prizePool, text } = detailInfo;
    return (
        <React.Fragment>
            <Breadcrumb pageTitle={'Match Details'} currentPage={'Match details'} />
            {/* Match details section */}
            <section id="match" className="match-area pb-120">
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-lg-12">
                            <div className="live-team">
                                <img src={mathchImg} alt="Match arena" />
                                <div className="live-team-box">
                                    <div className="row align-items-center text-center">
                                        <div className="col-lg-5">
                                            <div className="live-teams">
                                                <img src={thumb1} alt={team1} />
                                                <div className="text">
                                                    <h4>{team1}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <div className="match-time text-center">
                                                <h3>{'VS'}</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="live-teams">
                                                <img src={thumb2} alt={team2} />
                                                <div className="text">
                                                    <h4>{team2}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-8">
                            <div className="match-time text-center mt-50 mb-50">
                                <h3>
                                    {team1} {'vs'} {team2} - <span>{tournamentName}</span>
                                </h3>
                                <span>{date}</span>
                            </div>
                            <div className="row mb-30">
                                <div className="col-lg-6">
                                    <h5>{format}</h5>
                                    {stage}
                                </div>
                                <div className="col-lg-6">
                                    <h5>{prizePool}</h5> {'Prize Pool'}
                                </div>
                            </div>
                            {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                            <div className="slider-btn2 mt-50">
                                <Link to='/live-streaming' className="btn ss-btn">{'Watch Live'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MatcheseDetails;