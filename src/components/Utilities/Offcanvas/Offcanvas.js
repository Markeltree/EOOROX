import React from "react";
import { Link } from "react-router-dom";
import siteConfig from "../../../siteConfig";

const menuLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/team', label: 'Our Roster' },
    { to: '/matches', label: 'Matches' },
    { to: '/live-streaming', label: 'Live Streaming' },
    { to: '/blog', label: 'News' },
    { to: '/contact', label: 'Contact' },
]

const Offcanvas = ({ onOpne, onClose }) => {

    return (
        <React.Fragment>
            <div className={`offcanvas-menu ${onOpne ? 'active' : ''}`}>
                <span className="menu-close" onClick={() => onClose(!onOpne)}>
                    <i className="fas fa-times"></i>
                </span>
                <div id="cssmenu3" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-2" className="menu">
                        {
                            menuLinks.map(({ to, label }) => (
                                <li key={to} className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link to={to} onClick={() => onClose(false)}>{label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div id="cssmenu2" className="menu-one-page-menu-container">
                    <ul id="menu-one-page-menu-1" className="menu">
                        {siteConfig.phone && (
                            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}><span>{siteConfig.phone}</span></a>
                            </li>
                        )}
                        {siteConfig.email && (
                            <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                <a href={`mailto:${siteConfig.email}`}><span>{siteConfig.email}</span></a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={`offcanvas-overly ${onOpne ? 'active' : ''}`}
            onClick={() => onClose(!onOpne)}></div>
        </React.Fragment>
    );

}

export default Offcanvas;
