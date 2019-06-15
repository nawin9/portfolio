import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Main from './components/Main';

import Skill from './pages/Skill';
import Project from './pages/Project';
import Resume from './pages/Resume';

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/skill" component={Skill} />
                <Route exact path="/project" component={Project} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </BrowserRouter>
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
