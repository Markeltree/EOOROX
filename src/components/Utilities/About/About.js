import { Link } from 'react-router-dom';
import aboutBgImg from '../../../assets/img/bg/about-bg.png';
import experienceImg from '../../../assets/img/features/experience-years.png';
import features1 from '../../../assets/img/features/about-img1.jpg';
import features2 from '../../../assets/img/features/about-img2.jpg';
import features3 from '../../../assets/img/features/about-img3.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import siteConfig from '../../../siteConfig';

const About = () => {
    return (
        <section id="about" className="about-area about-p pt-70 pb-140 p-relative" style={{ background: `url(${aboutBgImg}) no-repeat center center / cover` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="s-about-img p-relative wow fadeInLeft" data-wow-delay=".4s">
                            <div className="experience-years wow fadeInDown" data-wow-delay=".4s">
                                <img src={experienceImg} alt="Years of experience" />
                                <span>{siteConfig.yearsActive}</span>
                            </div>
                            <img src={features1} alt="Eoorox players in action" />
                            <div className="about-image2 wow fadeInUp" data-wow-delay=".4s">
                                <img src={features2} alt="Eoorox team gaming setup" />
                            </div>
                            <div className="about-image3 wow fadeInUp" data-wow-delay=".6s">
                                <img src={features3} alt="Eoorox esports" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-content s-about-content wow fadeInRight" data-wow-delay=".4s">
                            <SectionTitle
                                titlefirst={'More Than a Team,'}
                                titleSec={'We Are Eoorox'}
                                className={'about-title second-title'}
                            />
                            <p><b>Eoorox is a professional esports organization built on discipline, teamwork and a relentless drive to win.</b></p>
                            <p>We recruit hungry, talented players and give them everything they need to perform at the highest level: structured coaching, dedicated practice schedules, performance analysis and a community that has their back. Whether we are on the main stage or in a late-night scrim, we play every round like it matters.</p>
                            <div className="about-content3 mt-30">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="green">
                                            <li>{'Full-time coaching and performance analysis'}</li>
                                            <li>{'Competing in top online and LAN tournaments'}</li>
                                            <li>{'Open tryouts for rising talent'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-btn2 mt-30">
                                <Link to={'/about'} className="btn ss-btn">{'Discover More'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;