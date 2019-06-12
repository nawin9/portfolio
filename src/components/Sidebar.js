import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div className="profile-container">
                <img className="profile img-circle" src="" alt="" />
                <h1 className="name">Nawin Kim</h1>
                <h3 className="tagline">Full Stack Developer</h3>
            </div>
            <div className="contact-container container-block">
                <ul className="list-unstyled contact-list">
                    <li className="email">
                        <i className="fas fa-envelope" />
                        <a href="mailto:kim.nawin@gmail.com">
                            {' '}
                            kim.nawin@gmail.com
                        </a>
                    </li>
                    <li className="phone">
                        <i className="fas fa-phone" />
                        <a href="#ZgotmplZ"> +33 6 27 10 61 32</a>
                    </li>
                    <li className="website">
                        <i className="fas fa-globe" />
                        <a href="//portfoliosite.com"> portfoliosite.com</a>
                    </li>
                    <li className="linkedin">
                        <i className="fab fa-linkedin" />
                        <a href="//linkedin.com/in/nawin-kim">
                            {' '}
                            linkedin.com/in/nawin-kim
                        </a>
                    </li>
                    <li className="github">
                        <i className="fab fa-github" />
                        <a href="//github.com/nawin9"> github.com/nawin9</a>
                    </li>
                </ul>
            </div>
            <div className="education-container container-block">
                <h2 className="container-block-title">Education</h2>
                <div className="item">
                    <h4 className="degree">Expert in Information Technology</h4>
                    <h5 className="meta">Epitech Paris</h5>
                    <div className="time">2017 - 2018</div>
                </div>
                <div className="item">
                    <h4 className="degree">Study abroad</h4>
                    <h5 className="meta">
                        California University of Long Beach
                    </h5>
                    <div className="time">2016-2017</div>
                </div>
                <div className="item">
                    <h4 className="degree">
                        BSc in Computer Science and Information Technology
                    </h4>
                    <h5 className="meta">Epitech Nancy</h5>
                    <div className="time">2013-2016</div>
                </div>
            </div>
            <div className="language-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    <li>
                        <span class="flag-icon flag-icon-us" /> English{' '}
                        <span className="lang-desc">(Professional)</span>
                    </li>
                    <li>
                        <span class="flag-icon flag-icon-fr" /> French{' '}
                        <span className="lang-desc">(Professional)</span>
                    </li>
                    <li>
                        <span class="flag-icon flag-icon-kh" /> Khmer{' '}
                        <span className="lang-desc">(Native)</span>
                    </li>
                </ul>
            </div>
            <div className="interests-container container-block">
                <h2 className="container-block-title">Interests</h2>
                <ul className="list-unstyled interests-list">
                    <li>Soccer</li>
                    <li>Climbing</li>
                    <li>Cooking</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
