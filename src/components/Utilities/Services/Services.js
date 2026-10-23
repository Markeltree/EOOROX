import ServiceItem from './service';

const services = [
    {
        icon: 'flaticon-degrees',
        title: 'Live Streaming',
        description: 'Watch our players compete live, catch match-day broadcasts and relive the best plays.'
    },
    {
        icon: 'flaticon-archery',
        title: 'Esports News',
        description: 'Roster updates, tournament results and behind-the-scenes stories, straight from the team.'
    },
    {
        icon: 'flaticon-competition',
        title: 'Competitions',
        description: 'We compete in leading online and LAN tournaments, and we host community events for our fans.'
    },
]

const Services = () => {
    return (
        <section id="services" className="services-area what-story pb-90 fix">
            <div className="container">
                <div className="row">
                    {
                        services.map((service, index) => {
                            return <ServiceItem
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;