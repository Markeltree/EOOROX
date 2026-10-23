import postThumb1 from '../assets/img/blog/inner_b1.jpg';
import postThumb2 from '../assets/img/blog/inner_b2.jpg';
import postThumb3 from '../assets/img/blog/inner_b3.jpg';

// News articles shown on the home page, the News page and each article page.
// Newest first. To add a post, copy one object and give it a unique slug.
const posts = [
    {
        slug: 'inside-an-eoorox-bootcamp-week',
        thumb: postThumb1,
        title: 'Inside an Eoorox Bootcamp Week',
        author: 'Eoorox Team',
        date: 'October 12, 2026',
        category: 'Behind the Scenes',
        tags: ['bootcamp', 'training', 'team'],
        excerpt: 'Early mornings, long scrim blocks and hours of review. Here is what a week of focused bootcamp really looks like for our roster.',
        quote: 'Bootcamp is where we stop being five good players and start being one team.',
        content: [
            'Before every major competition, our roster comes together for a dedicated bootcamp week. It is the most intense stretch of our calendar, and it is where most of our progress actually happens. Away from everyday distractions, the players live and breathe the game together.',
            'Each day starts with physical warm-ups and a short team meeting. The coaching staff sets clear goals for the day: a strategy to refine, a weakness to fix or a new set play to drill until it becomes second nature.',
            'The afternoons belong to scrims against strong opponents. We treat every scrim like an official match, with full communication, proper pauses and no shortcuts. The point is not to win practice. It is to create pressure that looks like the real thing.',
            'Evenings are for review. The analysts pull key moments from the day, and the team watches them back together. Players walk through their decisions out loud, which builds the shared understanding that wins close rounds.',
            'Rest is part of the plan too. Sleep, nutrition and downtime are scheduled just as carefully as practice, because a tired player makes slow decisions. By the end of the week the team is sharper, calmer and more connected, and ready to compete.',
        ],
    },
    {
        slug: 'how-we-scout-and-develop-new-talent',
        thumb: postThumb2,
        title: 'How We Scout and Develop New Talent',
        author: 'Eoorox Team',
        date: 'September 28, 2026',
        category: 'Team News',
        tags: ['tryouts', 'talent', 'academy'],
        excerpt: 'Raw mechanics get you noticed, but attitude gets you signed. A look at what our scouts look for and how new players grow with us.',
        quote: 'We can coach game sense. We cannot coach the hunger to improve.',
        content: [
            'Every strong roster needs a steady pipeline of new talent. At Eoorox, scouting never really stops. We watch ranked ladders, community tournaments and open qualifiers, looking for players who stand out.',
            'Mechanical skill is what gets a player noticed, but it is rarely what gets them signed. We pay close attention to how a player communicates, how they react to losing a round and whether they make the people around them better.',
            'Shortlisted players are invited to a trial period. They practice alongside our roster, take part in reviews and get honest feedback from the coaching staff. It is as much a chance for them to get to know us as it is for us to evaluate them.',
            'Players who join us get a clear development plan built around their role, their strengths and the areas they need to work on. Progress is reviewed regularly, so nobody is left guessing where they stand.',
            'If you think you have what it takes, keep an eye on our announcements for open tryouts, or reach out through our contact page with your in-game details and highlights.',
        ],
    },
    {
        slug: 'five-habits-of-consistent-competitive-players',
        thumb: postThumb3,
        title: 'Five Habits of Consistent Competitive Players',
        author: 'Eoorox Team',
        date: 'September 14, 2026',
        category: 'Guides',
        tags: ['guides', 'improvement', 'mindset'],
        excerpt: 'Talent wins games, but habits win seasons. These five routines separate consistent performers from players who peak and fade.',
        quote: 'Consistency is not luck. It is the result of the same good habits repeated every single day.',
        content: [
            'Watch any top competitive player for long enough and you will notice that their best performances are not accidents. They come from habits built over months and years. Here are five we see again and again.',
            'First, they warm up with purpose. Instead of jumping straight into a match, they spend time on aim routines, movement and mechanics so their first game is as sharp as their tenth.',
            'Second, they review their own gameplay. Watching back your own mistakes is uncomfortable, but it is the fastest way to stop repeating them.',
            'Third, they manage their mindset. Tilt is the enemy of consistency. Strong players have routines for resetting after a bad round, whether that is a deep breath, a short break or a simple focus cue.',
            'Fourth, they look after their bodies with proper sleep, hydration and regular breaks. Fifth, and most importantly, they play for the team: clear callouts, positive communication and a willingness to take on whatever role the team needs.',
        ],
    },
    {
        slug: 'why-communication-wins-more-rounds-than-aim',
        thumb: postThumb1,
        title: 'Why Communication Wins More Rounds Than Aim',
        author: 'Eoorox Team',
        date: 'August 30, 2026',
        category: 'Guides',
        tags: ['guides', 'teamwork', 'communication'],
        excerpt: 'The best aim in the lobby means little if your team does not know where the enemy is. Why clear communication is our most important skill.',
        quote: 'Good comms turn five individual players into one coordinated unit.',
        content: [
            'It is easy to assume that the team with the best aim always wins. In reality, high-level matches are usually decided by information: who knows more, sooner, and who acts on it together.',
            'Clear communication starts with short, precise callouts. Location, number of enemies and health status are the essentials. Anything more in the middle of a fight is just noise.',
            'Just as important is knowing when to stay quiet. Disciplined teams keep the channel clear during key moments so the shot-caller can be heard.',
            'Off the server, communication matters just as much. Honest, respectful reviews after a match help everyone understand what went wrong without turning it into blame.',
            'At Eoorox, we train communication as deliberately as we train mechanics. It is one of the first things we look for in new players, and it is a big reason our roster performs under pressure.',
        ],
    },
];

export default posts;
