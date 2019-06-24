import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default {
    introduction: {
        texts: [
            'Although I have acquired a lot of working experiences in Front-End, my passion lies in Full Stack Development. I like building apps with clean and scalable code.',
            'I currently work in Paris for a start-up company and accomplish various IT projects in the fields of transportation and energy.',
            'I am a fast learner and curious about new technologies.',
        ],
    },
    socialNetworks: [
        {
            link: 'https://github.com/nawin9',
            icon: faGithub,
        },
        {
            link: 'mailto:kim.nawin@gmail.com',
            icon: faEnvelope,
        },
        {
            link: 'https://www.linkedin.com/in/nawin-kim',
            icon: faLinkedin,
        },
        {
            link: 'https://www.instagram.com/nawindragon',
            icon: faInstagram,
        },
    ],
    navigations: [
        {
            path: '/',
            title: 'Home',
        },
        {
            path: '/experiences',
            title: 'Experiences',
        },
        {
            path: '/skills',
            title: 'Skills',
        },
        {
            path: '/projects',
            title: 'Projects',
        },
    ],
    skills: [
        {
            title: 'Programming Languages: ',
            description:
                'Javascript (ES6+), Typescript, Python, C, C++, C#, Java, ELM, Swift, HTML5, CSS3',
        },
        {
            title: 'Frameworks and Libraries: ',
            description:
                'React 15+, React Native, Angular 2+, jQuery, Express 4, Alamofire, Firebase',
        },
        {
            title: 'Database: ',
            description: 'MongoDB, MySQL',
        },
        {
            title: 'Tools and IDE: ',
            description: 'Vim, VS Code, XCode, Git, Jira, GSuite, Postman, Docker',
        },
    ],
    experiences: [
        {
            title: 'Full Stack Developer at Uppli SAS, PARIS',
            rightContent: '2018 - Present',
            bullets: [
                'Build a website for energy subscription',
                'Develop a website for client space dashboard',
                'Create a website for client payment',
                'Participate in app development for taxi order at CDG airport',
                'Help and tutor junior devs on all technical content in various projects',
            ],
        },
        {
            title: 'Front-End Intern at Mobility Codes, PARIS',
            rightContent: '2018 (6 months)',
            bullets: [
                'Develop an iOS app for taxis and VTC',
                'Start a web site development for energy subscription',
                'Renew the official website of Uppli',
            ],
        },
        {
            title: 'Front-End Intern at Uppli SAS, PARIS',
            rightContent: '2017 - 2018',
            bullets: [
                'Develop and stabilize cross-platform app for social meeting using React Native',
                'Build a geolocalisation app using bridge between React Native and Swift',
            ],
        },
        {
            title: 'Mobile Dev Intern at Mapicts, NANCY',
            rightContent: '2016 (7 months)',
            bullets: [
                'Build an native iOS app for an event notification project',
                'Prototype a cross-platform app using Ionic and AngularJS',
            ],
        },
        {
            title: 'Intern at Opinel, CHAMBÉRY',
            rightContent: '2014 (4 months)',
            bullets: [
                'Create an interface between CRM Pivotal and ERP Sylob (Both are commercial app)',
                'Participate in networking installation in industry',
            ],
        },
    ],
};
