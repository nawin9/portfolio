import React from 'react';

const Content = () => {
    return (
        <div className="main-wrapper">
            <section className="section summary-section">
                <h2 className="section-title">
                    <i className="fa fa-user" />
                    Career Profile
                </h2>
                <div className="summary">
                    <p>
                        Currently working as a full stack developer at Uppli
                        SAS, Paris, I'm specialized in front-end technologies
                        using the latest frameworks especially React. I've got
                        good skills in problem-solving and I'm interested in new
                        challenges.
                    </p>
                </div>
            </section>
            <section className="section experiences-section">
                <h2 className="section-title">
                    <i className="fa fa-briefcase" />
                    Experiences
                </h2>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Full Stack Developer</h3>
                            <div className="time">2018 - Present</div>
                        </div>
                        <div className="company">Uppli, Paris</div>
                    </div>
                    <div className="details">
                        <p />
                        <strong>React Developer</strong>
                        <ul>
                            <li>Develop a website for energy subscription</li>
                            <li>
                                Develop a website for client space dashboard
                            </li>
                            <li>Develop a website for client payment</li>
                            <li>
                                Participate in app development for taxi order at
                                CDG airport
                            </li>
                        </ul>
                        <p />
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Front-End Intern</h3>
                            <div className="time">2018 (6 months)</div>
                        </div>
                        <div className="company">Mobility Codes, Paris</div>
                    </div>
                    <div className="details">
                        <p>
                            <strong>iOS and Web Developer</strong>
                            <ul>
                                <li>Develop iOS app for taxis and VTC</li>
                                <li>
                                    Complety renew the official website of Uppli
                                </li>
                                <li>
                                    Start a web development for energy
                                    subscription
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Front-End Intern</h3>
                            <div className="time">2017 - 2018</div>
                        </div>
                        <div className="company">Uppli, Paris</div>
                    </div>
                    <div className="details">
                        <p>
                            <strong>Hybrid Mobile Developer</strong>
                            <ul>
                                <li>
                                    Develop a social meeting app using React
                                    Native
                                </li>
                                <li>
                                    Develop a geolocalisation app using bridge
                                    between React Native and Swift
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Front-End Intern</h3>
                            <div className="time">2016 (6 months)</div>
                        </div>
                        <div className="company">Uppli, Paris</div>
                    </div>
                    <div className="details">
                        <p>
                            <strong>Mobile Developer</strong>
                            <ul>
                                <li>
                                    Develop an social network app using Swift
                                    2.1
                                </li>
                                <li>
                                    Develop an app using Ionic and AngularJS
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">CRM Intern</h3>
                            <div className="time">2014 (4 months)</div>
                        </div>
                        <div className="company">Opinel, Chambéry</div>
                    </div>
                    <div className="details">
                        <p>
                            <strong>CRM Developer</strong>
                            <ul>
                                <li>
                                    Develop an interface between ERP Sylob and
                                    CRM Pivotal
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
            <section className="section projects-section">
                <h2 className="section-title">
                    <i className="fa fa-archive" />
                    Projects
                </h2>
                {/* <div className="item">
                    <span className="project-title">
                        <a href="https://github.com/aerohub/hugrid">Hugrid</a>
                    </span>{' '}
                    -{' '}
                    <span className="project-tagline">
                        Grid theme for Hugo. It’s a kind of boilerplate to
                        perform anyone or anything quickly. Portfolio,
                        collection, bookmarks, contacts and so on
                    </span>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="https://github.com/aerohub/hugo-faq-theme">
                            Simple FAQ Theme for Hugo
                        </a>
                    </span>{' '}
                    -{' '}
                    <span className="project-tagline">
                        Simple FAQ Theme for Hugo. You may use this theme for
                        building very simple FAQs or note lists.
                    </span>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="https://github.com/aerohub/hugo-identity-theme">
                            Hugo Identity
                        </a>
                    </span>{' '}
                    -{' '}
                    <span className="project-tagline">
                        Little profile/card-style template for Hugo.
                    </span>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="https://github.com/aerohub/hugo-orbit-theme">
                            Orbit
                        </a>
                    </span>{' '}
                    -{' '}
                    <span className="project-tagline">
                        Hugo Resume/CV Theme for Developers.
                    </span>
                </div>
                <div className="item">
                    <span className="project-title">
                        <a href="https://github.com/aerohub/hugo-me-theme">
                            Me
                        </a>
                    </span>{' '}
                    -{' '}
                    <span className="project-tagline">
                        A simple responsive Hugo theme for personal site.
                    </span>
                </div> */}
            </section>
            <section className="skills-section section">
                <h2 className="section-title">
                    <i className="fa fa-rocket" />
                    Skills &amp; Proficiency
                </h2>
                <div className="skillset">
                    <div className="item">
                        <h3 className="level-title">React, Angular, jQuery</h3>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Node</h3>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Python</h3>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Java</h3>
                    </div>
                    <div className="item">
                        <h3 className="level-title">C, C++, C#</h3>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Elm</h3>
                    </div>
                    <div className="item">
                        <h3 className="level-title">
                            HTML5, CSS3, Flexbox, CSS Grid
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;
