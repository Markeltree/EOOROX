import { useState } from 'react';
import siteConfig from '../../../siteConfig';

// There is no backend, so submitting opens the visitor's email app
// with the message pre-filled and addressed to siteConfig.email.
const Form = () => {
    const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFields({ ...fields, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `${fields.message}\n\n${fields.name}\n${fields.email}`;
        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
    }

    return (
        <form className="contact-form mt-30" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-field p-relative c-name mb-30">
                        <input type="text" id="name" name="name" placeholder="Your Name" value={fields.name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-field p-relative c-subject mb-30">
                        <input type="email" id="email" name="email" placeholder="Your Email" value={fields.email} onChange={handleChange} required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-field p-relative c-subject mb-30">
                        <input type="text" id="subject" name="subject" placeholder="Subject" value={fields.subject} onChange={handleChange} required />

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="contact-field p-relative c-message mb-30">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" value={fields.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="slider-btn">
                        <button type="submit" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">{'Send Message'}</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;
