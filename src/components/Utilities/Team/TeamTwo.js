import React from 'react';
import Member from "./Member";
import roster from "../../../data/roster";

const TeamTwo = () => {

    return (
        <section id="team" className="team-area2 pb-90">
            <div className="container">
                <div className="row ">
                    <Member teamData={roster} />
                </div>
            </div>
        </section>
    );

}

export default TeamTwo;
