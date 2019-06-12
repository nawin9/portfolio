import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import config from '../config';

const Main = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    return (
        <main>
            <div className="intro">{config.title}</div>
            <div className="tagline">{config.tagline}</div>
            <div className="pages-links">
                {config.routes.map((route, idx) => (
                    <Link key={idx} to={route.path} className="link">
                        {route.title}
                    </Link>
                ))}
            </div>

            <div className="icons-social">
                {config.socialNetworks.map((social, idx) => (
                    <a
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={social.link}
                    >
                        <i className={social.iconClassName} />
                    </a>
                ))}
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
