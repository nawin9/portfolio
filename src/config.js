import {
    faEnvelope,
    faPhone,
    faGlobe,
    faGraduationCap,
    faBriefcase,
    faFileCode,
    faWrench,
    faCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default {
    title: "Hello, I'm Nawin!",
    tagline:
        'Full Stack Dev | Passionate Coder | Linux Hacker | Web Tech Enthusiast',
    routes: [
        {
            path: '/',
            title: 'ABOUT'
        },
        {
            path: '/skill',
            title: 'SKILLS'
        },
        {
            path: '/project',
            title: 'PROJECTS'
        },
        {
            path: '/resume',
            title: 'RESUME'
        }
    ],
    socialNetworks: [
        {
            link: 'https://github.com/nawin9',
            iconClassName: 'fab fa-github'
        },
        {
            link: 'mailto:kim.nawin@gmail.com',
            iconClassName: 'fas fa-envelope'
        },
        {
            link: 'https://www.linkedin.com/in/nawin-kim',
            iconClassName: 'fab fa-linkedin'
        },
        {
            link: 'https://www.facebook.com/jinwenlong',
            iconClassName: 'fab fa-facebook'
        },
        {
            link: 'https://www.instagram.com/nawindragon',
            iconClassName: 'fab fa-instagram'
        }
    ],
    resume: {
        leftHeader: [
            {
                icon: faEnvelope,
                text: 'wkwok16@uw.edu'
            },
            {
                icon: faPhone,
                text: '(808) 218 - 3017'
            }
        ],
        middleHeader: ['William Kwok'],
        rightHeader: [
            {
                icon: faGithub,
                text: 'kwokwilliam'
            },
            {
                icon: faLinkedin,
                text: 'william-w-kwok'
            },
            {
                icon: faGlobe,
                text: 'https://williamk.info'
            }
        ],
        bullet: [
            {
                icon: faCircle
            }
        ],
        mainBody: [
            {
                title: 'EDUCATION',
                icon: faGraduationCap,
                content: [
                    {
                        title: 'University of Washington - Seattle, Washington',
                        rightContent: 'June 2020',
                        bullets: [
                            "GPA: 3.66/4.0 (Dean's List)",
                            'Bachelor of Science in Informatics working towards a custom Software Development track',
                            'Current coursework: Core Methods in Data Science, Informations Systems Analysis and Design, Server Side Development'
                        ]
                    }
                ]
            },
            {
                title: 'EXPERIENCE',
                icon: faBriefcase,
                content: [
                    {
                        title:
                            'University of Washington iSchool, Undergraduate Tutor',
                        rightContent: 'Jan 2019 - Present',
                        bullets: [
                            'Help and tutor students on all technical content in required various Information School courses',
                            'Technical Foundations of Informatics, Client Side Development, Databases and Data Modeling, and Server Side Development',
                            'Created a tutor hub with written and video tutorials on various topics or covered in the course',
                            'Created an interactive tutoring queue to organize questions when busy, and collect data on common problems'
                        ]
                    },
                    {
                        title:
                            'University of Washington iSchool, Teaching Assistant',
                        rightContent: 'Sep 2018 - Dec 2018',
                        bullets: [
                            'Teach students the foundational skills for building client side applications (INFO 340)',
                            'Host lab sections of about 35 students and answering content related questions on a class Slack channel',
                            'Grade problem sets and project-based assignments',
                            'Hold office hours for help understanding material from basic HTML and CSS to advanced React development'
                        ]
                    },
                    {
                        title:
                            'Code and Cognition Lab, Undergraduate Researcher',
                        rightContent: 'Jun 2018 - Present',
                        bullets: [
                            'Apply Agile development principles for assisting with research projects',
                            'Design, build, and user test computer science tutoring applications using JavaScript/ES6, React, Jest, and Enzyme',
                            'Collect, analyze data, and write for a paper on teaching programming strategies to adolescents accepted to SIGCSE 2019'
                        ]
                    },
                    {
                        title: 'Washington iGEM, Web Development Lead',
                        rightContent: 'Feb 2017 - Present',
                        bullets: [
                            'Previously helped design a modular, affordable, bio-reactor along with a novel open-source syringe pump design',
                            'Lead a diverse team of six to design and build the team website and iGEM Team Wiki (required for competition judging)'
                        ]
                    }
                ]
            },
            {
                title: 'RECENT PROJECTS',
                icon: faFileCode,
                content: [
                    {
                        title: 'CodeItz, Code and Cognition Lab',
                        rightContent: 'June 2018 - Present',
                        bullets: [
                            'CodeItz is a web tutor that uses a Bayesian Knowledge Tracing algorithm to help users learn programming concepts',
                            'Established the framework for writing unit tests in the application and helped removed code redundancy to reduce bugs',
                            'Enzyme, Express, Firebase, Flow, JavaScript, Jest, Lodash, MaterialUI, React, React Router, Sass'
                        ]
                    },
                    {
                        title:
                            'Research Paper - Programming Strategies, Code and Cognition Lab',
                        rightContent: 'June 2018 - August 2018',
                        bullets: [
                            "The paper, titled 'Teaching Explicit Programming Strategies to Adolescents' was accepted to SIGCSE 2019",
                            'The paper investigates the teaching of explicit programming strategies in the classroom to adolescent students',
                            'Aided in the process of data collection, analyzation, and writing to determine if strategy scaffolding correlates to success ',
                            'Excel, JavaScript, LaTeX, Ordinal Linear Regression, R'
                        ]
                    },
                    {
                        title:
                            'App Development Personal Project - FRC Scouting App 2018',
                        rightContent: 'March 2018',
                        bullets: [
                            'A web application that allows the Hawaii Robotics community to visualize their performance at the state championships',
                            'The application was built a day before the competition, and had data input in it by my old high school team',
                            'The data was released to the local community so teams could see their performance going into the world championship',
                            'Bootstrap, D3js, Firebase, JavaScript, React, React Router'
                        ]
                    }
                ]
            }
        ],
        bottom: [
            {
                title: 'SKILLS',
                icon: faWrench,
                items: [
                    {
                        title: 'Languages: ',
                        list: [
                            'Golang',
                            'JavaScript (ES6+)',
                            'Java',
                            'Python',
                            'SQL',
                            'R',
                            'LaTeX',
                            'C++',
                            'CSS',
                            'HTML',
                            'MATLAB'
                        ]
                    },
                    {
                        title: 'Tools and Frameworks: ',
                        list: [
                            'AWS',
                            'Docker',
                            'git',
                            'Firebase',
                            'GraphQL',
                            'jQuery',
                            'NextJS',
                            'React',
                            'Redis',
                            'VueJS'
                        ]
                    },
                    {
                        title: 'Processes: ',
                        list: [
                            'Agile Development, Data Analysis, Managing, Research, Teaching, Typescript, Web Development'
                        ]
                    }
                ]
            }
        ]
    }
};
