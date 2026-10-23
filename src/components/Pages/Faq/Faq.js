import React from 'react';
import { Accordion } from 'react-bootstrap';
import Breadcrumb from '../../Utilities/Breadcrumb/Breadcrumb';
import AccordionItem from '../../Utilities/AccordionItem/AccordionItem';

const faqSections = [
    {
        heading: 'About Eoorox',
        intro: 'Eoorox is a competitive esports organization. We field professional rosters, develop new talent and create content for a growing community of fans. Here are answers to the questions we hear most often.',
        items: [
            {
                title: 'What is Eoorox?',
                bodyText: 'Eoorox is a professional esports organization. We build and support competitive teams, provide coaching and performance analysis, and share our journey with fans through streams, videos and news.'
            },
            {
                title: 'Which games do you compete in?',
                bodyText: 'We compete across PC, console and mobile titles. Visit the Our Games page for the current list of divisions we are active in.'
            },
            {
                title: 'Where can I watch your matches?',
                bodyText: 'Our official matches, highlights and community streams are broadcast on our streaming channels. Check the Live Streaming page and follow our social channels for match-day announcements.'
            },
        ],
    },
    {
        heading: 'Tryouts and Partnerships',
        intro: 'Want to play for Eoorox, create content with us or partner with the brand? These answers explain how to get started.',
        items: [
            {
                title: 'How can I try out for the team?',
                bodyText: 'We announce open tryouts on our news page and social channels. You can also reach out through the Contact page with your in-game name, rank, role and any highlight clips.'
            },
            {
                title: 'Is there an age requirement to join?',
                bodyText: 'Requirements depend on the game and the tournament rules for that title. Most competitions set a minimum age, and players under 18 need consent from a parent or guardian.'
            },
            {
                title: 'How do I become a sponsor or partner?',
                bodyText: 'We work with brands that want to reach a passionate gaming audience. Send us a message through the Contact page with a short introduction and our partnerships team will get in touch.'
            },
        ],
    },
]

const Faqs = () => {
    return (
        <React.Fragment>
            <Breadcrumb pageTitle={'Frequently Asked Questions'} currentPage={'FAQ'} />

            <section id="faq" className="faq-area pb-90">
                <div className="container">
                    {
                        faqSections.map(({ heading, intro, items }, sectionIndex) => (
                            <div className={`row ${sectionIndex > 0 ? 'mt-50' : ''}`} key={heading}>
                                <div className="col-lg-6 col-md-6">
                                    <div className="faq-wrap">
                                        <h4 className="mb-30">{heading}</h4>
                                        <p>{intro}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="faq-wrap">
                                        <Accordion className="accordion" id={`accordion-${sectionIndex}`} defaultActiveKey="0">
                                            {
                                                items.map(({ title, bodyText }, index) => (
                                                    <AccordionItem
                                                        key={title}
                                                        id={String(index)}
                                                        title={title}
                                                        body={bodyText} />
                                                ))
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

        </React.Fragment>
    )
}

export default Faqs;
