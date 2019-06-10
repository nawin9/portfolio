import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Main = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <main>
            <div className="intro">Hello, I'm Nawin!</div>
            <div className="tagline">
                Full Stack Dev | Passionate Coder | Linux Hacker | Web Tech
                Enthusiast
            </div>
            <div className="icons-social">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/nawin9"
                >
                    <i className="fab fa-github" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:kim.nawin@gmail.com"
                >
                    <i className="fas fa-envelope" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/nawin-kim"
                >
                    <i className="fab fa-linkedin" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/jinwenlong"
                >
                    <i className="fab fa-facebook" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/nawindragon"
                >
                    <i className="fab fa-instagram" />
                </a>
            </div>
            <div>
                <button onClick={() => changeLanguage('el')}>el</button>
                <button onClick={() => changeLanguage('en')}>en</button>
                <h3 className="focus">{t('Declarative')}</h3>
                <Trans name={'React.js'}>
                    React makes it painless to create interactive UIs. Design
                    simple views for each state in your application, and React
                    will efficiently update and render just the right components
                    when your data changes.
                </Trans>
            </div>
        </main>
    );
};

const Loader = () => (
    <div className="App">
        <div>loading...</div>
    </div>
);

export default () => {
    return (
        <React.Suspense fallback={<Loader />}>
            <Main />
        </React.Suspense>
    );
};
