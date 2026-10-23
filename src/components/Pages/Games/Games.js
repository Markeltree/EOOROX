import React from 'react';
import Breadcrumb from "../../Utilities/Breadcrumb/Breadcrumb";
import GameGrid from "../../Utilities/GameGrid/GameGrid";

const Games = () => {
    return (
        <React.Fragment>
            <Breadcrumb pageTitle={'Our Games'} currentPage={'Games'} />
            <section id="work" className="pb-120">
                <div className="container">
                    <GameGrid />
                </div>
            </section>
        </React.Fragment>
    );
}
export default Games;
