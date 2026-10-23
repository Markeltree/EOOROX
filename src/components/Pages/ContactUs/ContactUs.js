import React from "react";

import contactHeader from '../../../assets/img/bg/contant-hd.png';
import Form from "../../Utilities/Form/Form";
import siteConfig from "../../../siteConfig";

import { Link } from "react-router-dom";


const contactDetails = [
    {
        branceName: 'General Enquiries',
        lines: [siteConfig.email, siteConfig.phone, siteConfig.supportHours],
    },
    {
        branceName: 'Visit Us',
        lines: [siteConfig.address],
    },
].filter(item => item.lines.some(Boolean));

const ContactUs = () => {

    return (
        <React.Fragment>

            <section className="breadcrumb-area d-flex align-items-center" style={{ background: `url(${contactHeader})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-left">
                                <div className="breadcrumb-title">
                                    <h2>{'Contact Us'}</h2>
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link to={'/'}>{'Home'}</Link>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">{'Contact Us'}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-info wow fadeInLeft animated" data-animation="fadeInRight" data-delay=".4s">
                                <div className="section-title center-align">
                                    <h2>
                                        {'Contact'} <br /> <span>{'Information'}</span>
                                    </h2>
                                    <p>{'Have a question about the team, a tryout application or a partnership idea? We would love to hear from you. Reach out using the details below and our team will respond as soon as possible.'}</p>
                                </div>
                                <div className="row mt-50">
                                    {
                                        contactDetails.map(({ branceName, lines }) => (
                                            <div className="col-lg-6 contact_info" key={branceName}>
                                                <h4>{branceName}</h4>
                                                {lines.filter(Boolean).map(line => <p key={line}>{line}</p>)}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-bg02 wow fadeInRight animated">
                                <div className="section-title center-align">
                                    <h2>
                                        {'Get in'}<br /> <span>{'Touch'}</span>
                                    </h2>
                                    <p>{'Fill in the form and hit send. It opens your email app with your message ready to go, so you can review it before sending.'}</p>
                                </div>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );

}

export default ContactUs;