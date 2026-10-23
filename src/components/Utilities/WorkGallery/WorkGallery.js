import React from 'react';

import bgImg from '../../../assets/img/bg/trendiang-bg.png';

import GameGrid from '../GameGrid/GameGrid';
import LiveStreamingVideo from '../LiveStreamingVideo/LiveStreamingVideo';

const WorkGallery = () => {
    return (
        <section id="work" className="pt-120 pb-120" style={{ background: `url(${bgImg}) no-repeat` }}>
            <div className="container">
                <GameGrid limit={4} />
                <LiveStreamingVideo />
            </div>
        </section>
    );
}


export default WorkGallery;
