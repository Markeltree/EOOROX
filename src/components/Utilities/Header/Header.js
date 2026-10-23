import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import logo from '../../../assets/img/logo/logo.png';
import toggolIcon from '../../../assets/img/bg/toggle-menu.png';
import Offcanvas from '../Offcanvas/Offcanvas';
import siteConfig from '../../../siteConfig';



const Header = () => {

    const [openCanvas, setOpenCanves] = useState(false);

    const [iconToggle, setIconToggle] = useState(false);

    const heandelOpen = () => {
        setOpenCanves(!openCanvas);
    }


    return (
        <React.Fragment>
            <header className='header-area header-three p-relative'>
                <div id="header-sticky" className="menu-area">
                    <div className="container-fluid pl-50 pr-50">
                        <div className="second-menu">
                            <div className="row align-items-center">
                                <div className="col-xl-1 col-lg-1 col-6">
                                    <div className="logo">
                                        <Logo logo={logo} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block offset-lg-2">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li><Link to={'/'}>{'Home'}</Link></li>
                                                <li><Link to={'/about'}>{'About Us'}</Link></li>
                                                <li className="has-sub">
                                                    <Link to={'/team'}>{'Esports'}</Link>
                                                    <ul>
                                                        <li><Link to={'/team'}>{'Our Roster'}</Link></li>
                                                        <li><Link to={'/games'}>{'Our Games'}</Link></li>
                                                        <li><Link to={'/matches'}>{'Matches'}</Link></li>
                                                        <li><Link to={'/live-streaming'}>{'Live Streaming'}</Link></li>
                                                        <li><Link to={'/gallery'}>{'Gallery'}</Link></li>
                                                        <li><Link to={'/faq'}>{'FAQ'}</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to={'/blog'}>{'News'}</Link></li>
                                                <li><Link to={'/contact'}>{'Contact'}</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 text-left d-none d-lg-block mt-30 mb-30">
                                    <div className="cart-top">
                                        <ul>
                                            {siteConfig.social.instagram && (
                                                <li>
                                                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 text-right d-none d-lg-block mt-30 mb-30">
                                    <a href="/" onClick={(e) => { e.preventDefault(); heandelOpen(); }} className="menu-tigger">
                                        <img src={toggolIcon} alt="Open menu" />
                                    </a>
                                </div>
                                <div className="col-6 d-block d-lg-none">

                                    <div className="mobile-toggler text-right">
                                        <a href="/" onClick={(e) => { e.preventDefault(); setIconToggle(!iconToggle); }}>
                                            <i className={`${iconToggle ? 'fas fa-times' : 'fa fa-bars'}`}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MobileMenu toggleMenu={iconToggle} onClose={setIconToggle} />
                    </div>
                </div>
            </header>
            <Offcanvas onOpne={openCanvas} onClose={setOpenCanves} />

        </React.Fragment>
    )
}

export default Header;
