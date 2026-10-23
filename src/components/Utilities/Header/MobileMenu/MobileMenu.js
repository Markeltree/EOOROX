import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-bootstrap';

const esportsLinks = [
    { to: '/team', label: 'Our Roster' },
    { to: '/games', label: 'Our Games' },
    { to: '/matches', label: 'Matches' },
    { to: '/live-streaming', label: 'Live Streaming' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/faq', label: 'FAQ' },
]

class MobileMenu extends Component {

    state = {
        isOpen: false,
    }

    isDropDownOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }


    render() {

        const { isOpen } = this.state;

        return (
            <div>
                <div className={`mobile-menu ${this.props.toggleMenu ? 'mobile-menu-active' : ''}`}>
                    <ul className="mean-nav">
                        <li>
                            <Link onClick={() => this.props.onClose(false)}
                                to={'/'}>
                                {'Home'}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => this.props.onClose(false)}
                                to={'/about'}>
                                {'About Us'}
                            </Link>
                        </li>
                        <li onClick={this.isDropDownOpen}>
                            {'Esports'}
                            <i className="fa fa-angle-down"></i></li>
                        <Collapse in={isOpen}>
                            <ul>
                                {
                                    esportsLinks.map(({ to, label }) => (
                                        <li key={to}>
                                            <Link onClick={() => this.props.onClose(false)}
                                                to={to}>
                                                {label}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Collapse>
                        <li>
                            <Link onClick={() => this.props.onClose(false)}
                                to={'/blog'}>
                                {'News'}
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => this.props.onClose(false)}
                                to={'/contact'}>
                                {'Contact'}
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}
export default MobileMenu;
