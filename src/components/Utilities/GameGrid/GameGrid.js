import React, { useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import games, { platforms } from '../../../data/games';

// Filterable grid of game divisions, used on the home page and the Games page.
const GameGrid = ({ limit }) => {
    const allGames = limit ? games.slice(0, limit) : games;
    const filters = ['All', ...platforms.filter(platform => allGames.some(game => game.cat === platform))];
    const [active, setActive] = useState('All');
    const items = active === 'All' ? allGames : allGames.filter(game => game.cat === active);

    return (
        <div className="portfolio ">
            <div className="row align-items-center mb-30 wow fadeInUp animated" data-animation="fadeInRight" data-delay=".4s">
                <div className="col-lg-12">
                    <SectionTitle
                        titlefirst='Where We'
                        titleSec='Compete' />
                </div>
                <div className="col-lg-12">
                    <div className="my-masonry wow fadeInDown animated" data-animation="fadeInRight" data-delay=".4s">
                        <div className="button-group filter-button-group ">
                            {
                                filters.map(platform => (
                                    <button
                                        key={platform}
                                        className={active === platform ? 'active' : ''}
                                        onClick={() => setActive(platform)}>
                                        {platform}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid col4">
                {
                    items.map(({ img, tag, label, description }) => (
                        <div className="grid-item" key={label}>
                            <figure className="gallery-image">
                                <img src={img} alt={label} className="img" />
                                <figcaption>
                                    <span>{tag}</span>
                                    <h4>{label}</h4>
                                    <p>{description}</p>
                                </figcaption>
                            </figure>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default GameGrid;
