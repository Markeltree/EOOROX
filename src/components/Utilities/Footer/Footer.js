import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import logo from '../../../assets/img/logo/f_logo.png';
import siteConfig from "../../../siteConfig";
import SocialLinks, { hasSocialLinks } from "../SocialLinks/SocialLinks";

const Footer = () => {
    return (
        <footer className="footer-bg footer-p">
            <div className="footer-top pt-70">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title mb-20">
                                    <Logo logo={logo} />
                                </div>
                                <div className="footer-link">{`${siteConfig.brandName} is a competitive esports organization building championship rosters, developing new talent and bringing fans closer to the game.`}</div>
                                <div className="f-contact mt-20">
                                    <ul>
                                        {siteConfig.address && (
                                            <li>
                                                <i className="icon fal fa-map-marker-alt"></i>
                                                <span>{'Address: '}{siteConfig.address}</span>
                                            </li>
                                        )}
                                        {siteConfig.phone && (
                                            <li>
                                                <i className="icon fal fa-phone"></i>
                                                <span>
                                                    {'Phone: '}
                                                    <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                                                </span>
                                            </li>
                                        )}
                                        {siteConfig.email && (
                                            <li>
                                                <i className="icon fal fa-envelope"></i>
                                                <span>
                                                    {'Email: '}
                                                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Quick Links'}</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to={'/'}>{'Home'}</Link></li>
                                        <li><Link to={'/about'}>{'About Us'}</Link></li>
                                        <li><Link to={'/blog'}>{'News'}</Link></li>
                                        <li><Link to={'/contact'}>{'Contact Us'}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Esports'}</h2>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><Link to={'/team'}>{'Our Roster'}</Link></li>
                                        <li><Link to={'/matches'}>{'Matches'}</Link></li>
                                        <li><Link to={'/live-streaming'}>{'Live Streaming'}</Link></li>
                                        <li><Link to={'/gallery'}>{'Gallery'}</Link></li>
                                        <li><Link to={'/faq'}>{'FAQ'}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h2>{'Join the Squad'}</h2>
                                </div>
                                <div className="footer-link">{'Tryouts, sponsorships and media requests are always welcome. Drop us a message and our team will get back to you.'}</div>
                                <div className="slider-btn mt-20">
                                    <Link to={'/contact'} className="btn ss-btn">{'Get in Touch'}</Link>
                                </div>
                            </div>
                            {hasSocialLinks && (
                                <div className="footer-widget mb-30">
                                    <div className="f-widget-title">
                                        <h2>{'Follow Us'}</h2>
                                    </div>
                                    <div className="footer-social mt-30">
                                        <SocialLinks />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            {`Copyright © ${new Date().getFullYear()}`} <span>{siteConfig.brandName}</span>{'. All Rights Reserved.'}
                        </div>
                        <div className="col-lg-6 text-right text-xl-right"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
