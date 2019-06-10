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
                        <strong>Summarise your career here</strong> lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit. Lorem
                        ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu.
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
                            <h3 className="job-title">Lead Developer</h3>
                            <div className="time">2015 - Present</div>
                        </div>
                        <div className="company">
                            Startup Hubs, San Francisco
                        </div>
                    </div>
                    <div className="details">
                        <p />
                        <p>
                            <strong>Describe your role here</strong> lorem ipsum
                            dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies
                            nec, pellentesque eu, pretium quis, sem. Nulla
                            consequat massa quis enim. Donec pede justo.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                        <p />
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">
                                Senior Software Engineer
                            </h3>
                            <div className="time">2014 - 2015</div>
                        </div>
                        <div className="company">Google, London</div>
                    </div>
                    <div className="details">
                        <p>
                            <strong>Describe your role here</strong> lorem ipsum
                            dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies
                            nec, pellentesque eu, pretium quis, sem.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">UI Developer</h3>
                            <div className="time">2012 - 2014</div>
                        </div>
                        <div className="company">Amazon, London</div>
                    </div>
                    <div className="details">
                        <p>
                            <strong>Describe your role here</strong> lorem ipsum
                            dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies
                            nec, pellentesque eu, pretium quis, sem.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section projects-section">
                <h2 className="section-title">
                    <i className="fa fa-archive" />
                    Projects
                </h2>
                <div className="intro">
                    <p>
                        <strong>
                            You can list your side projects or open source
                            libraries in this section.
                        </strong>{' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum et ligula in nunc bibendum fringilla a eu
                        lectus
                    </p>
                </div>
                <div className="item">
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
                </div>
            </section>
            <section className="skills-section section">
                <h2 className="section-title">
                    <i className="fa fa-rocket" />
                    Skills &amp; Proficiency
                </h2>
                <div className="skillset">
                    <div className="item">
                        <h3 className="level-title">Python &amp; Django</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="98%" />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Javascript &amp; jQuery</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="98%" />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Angular</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="95%" />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className="level-title">HTML5 &amp; CSS</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="95%" />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Ruby on Rails</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="75%" />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className="level-title">Sketch &amp; Photoshop</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner" data-level="60%" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;
